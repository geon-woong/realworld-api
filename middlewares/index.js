"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotLoggedIn = exports.isLoggedIn = void 0;
const http_exception_1 = __importDefault(require("../models/http-exception"));
const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        return new http_exception_1.default(401, { message: 'auth is required' });
    }
};
exports.isLoggedIn = isLoggedIn;
const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    }
    else {
        return new http_exception_1.default(403, { message: 'already logged in' });
    }
};
exports.isNotLoggedIn = isNotLoggedIn;
