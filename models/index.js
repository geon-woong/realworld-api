"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const user_1 = __importDefault(require("./user"));
const article_1 = __importDefault(require("./article"));
const config_1 = __importDefault(require("../config/config"));
const env = process.env.NODE_ENV || 'development';
const config = config_1.default[env];
exports.sequelize = new sequelize_1.default.Sequelize(config.database, config.username, config.password, config);
user_1.default.initiate(exports.sequelize);
article_1.default.initiate(exports.sequelize);
user_1.default.associate();
article_1.default.associate();
