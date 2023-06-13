"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    development: {
        username: process.env.USER_NAME,
        password: process.env.SEQUELIZE_PWD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        logging: true,
    },
    test: {
        username: process.env.USER_NAME,
        password: process.env.SEQUELIZE_PWD,
        database: process.env.DATABASE,
        host: "127.0.0.1",
        dialect: "mysql",
        logging: true,
    },
    production: {
        username: process.env.USER_NAME,
        password: process.env.SEQUELIZE_PWD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        logging: false,
    },
};
