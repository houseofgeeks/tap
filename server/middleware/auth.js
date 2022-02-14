const passport = require('passport');
var dotenv = require("dotenv")
dotenv.config({ path: ".env" })
const GoogleStrategy = require('passport-google-oauth2').Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/admin/auth/google/callback",
    passReqToCallback: true,
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});