import * as passportJWT from "passport-jwt";

import {getUserByObjId} from "../reposiotries/userRepository.js";
import passport from "passport";

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;


const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.PRIVATE_KEY,
    algorithms: ['RS256']
}

const strategy = new JWTStrategy(options, (payload, done) => {
    return getUserByObjId(payload.sub).then(user => {
        console.log(user)
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    }).catch(err => done(err, false))
})

passport.use(strategy)


export const pass = passport