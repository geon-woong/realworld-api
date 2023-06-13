import express, {ErrorRequestHandler} from 'express';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import path from 'path';
import routes from './routes/routes';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import session from 'express-session';
import dotenv from 'dotenv'
import { sequelize } from './models';
import passportConfig from './passport';
import passport from 'passport';

dotenv.config();
const app = express();
passportConfig();
app.set('port', process.env.PORT || 8001);
app.use(routes);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret : process.env.COOKIE_SECRET!,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

sequelize.sync({ force: false })
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.error(err);
    })

const swaggerSpec = YAML.load(path.join(__dirname, './swagger.yaml'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(app.get('port'), () => {
    console.log('listening 8001');
});


app.use((req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  });
  
  const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  };
  
  app.use(errorHandler);