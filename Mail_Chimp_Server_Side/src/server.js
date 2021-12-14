const express = require('express');

const connect = require("./configs/db");

const passport = require("./configs/passport.configs");

const userController = require("./controllers/user.controller");

const { register, login, newToken } = require("./controllers/auth.controller");

const app = express();

app.use(express.json());

app.use(passport.initialize());

app.use("/users", userController);


app.post("/register", register);

app.post("/login", login);

passport.serializeUser(function({ user, token }, done) {
    done(null, { user, token });
});

passport.deserializeUser(function(id, done) {
    done(err, { user, token });
});

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }),
    function(req, res) {
        const { user, token } = req.user;
        return res.status(200).json({ user, token });
    });

const start = async() => {
    await connect();

    app.listen(9656, () => {
        console.log('listening on port 9656');
    })
}

module.exports = start;