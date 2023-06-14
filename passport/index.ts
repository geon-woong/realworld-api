import passport from "passport";
import local from './localStrategy';
import User from "../models/user";

export default () => {
    /**
     * 로그인 시 실행되며 req.session 객체에 사용자 정보를 저장
     */
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    /**
     * passport.session 미들웨어가 실행
     * 매 요청마다 실행되어 세션에 저장된 사용자정보를 불러옴
     */
    passport.deserializeUser((id: number, done) => {
        User.findOne({
            where: {id},
            include: [{
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followers',
            },{
                model:User,
                attributes: ['id', 'nick'],
                as: 'Followings',
            }],
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

      local();
}