"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    development: {
        username: 'geonwoong',
        password: process.env.DB_PASSWORD,
        database: 'realworld-api',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: true,
    },
    test: {
        username: "geonwoong",
        password: process.env.DB_PASSWORD,
        database: 'realworld-api',
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: 'geonwoong',
        password: process.env.DB_PASSWORD,
        database: 'realworld-api',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
    },
};
