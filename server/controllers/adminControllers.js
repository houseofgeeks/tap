exports.adminRouteLogin = (req, res) => {
    res.send('<a href="/admin/auth/google">Authenticate with Google</a>');
}

exports.protectedRoute = (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
}

exports.logoutAdmin = (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('Goodbye!');
}

exports.failureRedirect = (req, res) => {
    res.send('Failed to authenticate..');
}