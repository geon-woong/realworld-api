"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = require("./models");
const passport_1 = __importDefault(require("./passport"));
const passport_2 = __importDefault(require("passport"));
const nunjucks_1 = __importDefault(require("nunjucks"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, passport_1.default)();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjucks_1.default.configure('views', {
    express: app,
    watch: true,
});
app.use(routes_1.default);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport_2.default.initialize());
app.use(passport_2.default.session());
models_1.sequelize.sync({ force: false })
    .then(() => {
    console.log('DB connected');
})
    .catch((err) => {
    console.error(err);
});
const swaggerSpec = yamljs_1.default.load(path_1.default.join(__dirname, './swagger.yaml'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
exports.default = app;
