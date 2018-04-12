import * as passport from "passport";
import { Request, Response, NextFunction } from "express";
import * as passportLocal from "passport-local";
import * as _ from "lodash";
import * as HttpStatus from 'http-status-codes'
import { User } from "../models/UserModel";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((user, done) => {
    console.log('serializeUser');
    done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    console.log("in passport.user");

    User.findOne({ email: email.toLowerCase() }, (err, user: any) => {

        if (err) {
            return done(err);
        }

        if (!user) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }

        user.comparePassword(password, (err: Error, isMatch: boolean) => {
            if (err) { return done(err); }

            if (isMatch) {
                return done(undefined, user);
            }

            return done(undefined, false, { message: "Invalid email or password." });
        });
    });
}));


export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(HttpStatus.FORBIDDEN).send({});
};


export let isAuthorized = (req: Request, res: Response, next: NextFunction) => {
    const provider = req.path.split("/").slice(-1)[0];

    if (_.find(req.user.tokens, { kind: provider })) {
        next();
    } else {
        res.redirect(`/auth/${provider}`);
    }
};
