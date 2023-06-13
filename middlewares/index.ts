import HttpException from "../models/http-exception";
import { RequestHandler } from "express";

const isLoggedIn: RequestHandler = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
       return new HttpException(401,{ message: 'auth is required' })
    }
}

const isNotLoggedIn: RequestHandler = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next()
    } else {
        return new HttpException(403,{ message: 'already logged in' })

    }
};

export { isLoggedIn, isNotLoggedIn };