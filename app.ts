import express from 'express';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import path from 'path';
import routes from './routes/routes';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import session from 'express-session';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
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

const swaggerSpec = YAML.load(path.join(__dirname, './swagger.yaml'))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(app.get('port'), () => {
    console.log('listening 8001');
});