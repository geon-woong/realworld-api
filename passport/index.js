"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const localStrategy_1 = __importDefault(require("./localStrategy"));
const user_1 = __importDefault(require("../models/user"));
exports.default = () => {
    /**
     * 로그인 시 실행되며 req.session 객체에 사용자 정보를 저장
     */
    passport_1.default.serializeUser((user, done) => {
        done(null, user.id);
    });
    /**
     * passport.session 미들웨어가 실행
     * 매 요청마다 실행되어 세션에 저장된 사용자정보를 불러옴
     */
    passport_1.default.deserializeUser((id, done) => {
        user_1.default.findOne({
            where: { id },
            include: [{
                    model: user_1.default,
                    attributes: ['id', 'nick'],
                    as: 'Followers',
                }, {
                    model: user_1.default,
                    attributes: ['id', 'nick'],
                    as: 'Followings',
                }],
        })
            .then(user => done(null, user))
            .catch(err => done(err));
    });
    (0, localStrategy_1.default)();
};
