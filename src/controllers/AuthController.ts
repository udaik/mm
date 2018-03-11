import { AbstractController } from "./AbstractController";
import { NextFunction, Request, Response } from "express";
// import { RequestValidation } from "express-validator";
import { UserController } from "./UserController";
import { Logger } from "log4js";
import { authenticate } from "passport";

export class AuthController extends AbstractController {
    logger: Logger;

    constructor(logging: Logger) {
        super(logging);
        this.logger = logging;
        this.logger.debug("Auth Controller Instantiated");
    }

    create(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    findAll(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    findOne(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    update(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    delete(req: Request, resp: Response, next: NextFunction): void {
        next();
    }

    loginGet(req: Request, resp: Response, next: NextFunction): void {
        resp.render('login');
        next();
    }

    register(req: Request, resp: Response, next: NextFunction): void {
        next();
        /*
        var name = req.body.name;
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var password2 = req.body.password2;

        // Validation
        req.checkBody('name', 'Name is required').notEmpty();
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

        var errors = req.validationErrors();

        if (errors) {
            resp.render('register', {
                errors: errors
            });
        } else {
            /*
            var newUser = new User({
                name: name,
                email: email,
                username: username,
                password: password
            });

            /*
            User.createUser(newUser, function (err, user) {
                if (err) throw err;
                console.log(user);
            });
            */

            /*
            req.flash('success_msg', 'You are registered and can now login');

            resp.redirect('/users/login');
            
        }
        */
    }

    loginPost(req: Request, resp: Response, next: NextFunction): void {
        authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true });

        /*
            function (req, resp) {
                res.redirect('/');
            };
            */
    }

    loginOut(req: Request, resp: Response, next: NextFunction): void {
        req.logout();
        req.flash('success_msg', 'You are logged out');
        resp.redirect('/users/login');
    }
}


/*


passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});
*/