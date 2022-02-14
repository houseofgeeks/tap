const express = require('express');
const passport = require('passport');
const { adminRouteLogin, protectedRoute, logoutAdmin, failureRedirect } = require('../controllers/adminControllers');
require('../middleware/auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

const router = express.Router();

router.route('/').get(adminRouteLogin);
router.route('/auth/google').get(passport.authenticate('google', { scope: ['email', 'profile'] }));
router.route("/auth/google/callback").get(
    passport.authenticate('google', {
        successRedirect: '/admin/protected',
        failureRedirect: '/admin/auth/google/failure'
    })
);
router.route('/protected').get(isLoggedIn, protectedRoute);
router.route('/logout').get(logoutAdmin);
router.route('/auth/google/failure').get(failureRedirect);


module.exports = router;