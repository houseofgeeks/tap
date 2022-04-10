const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req, res, next) => {
    const token = req.cookies.accessToken
    jwt.verify(token, "processxxkjsvbdk454163envJWT_SECRETdgsjkggln", (err, user) => {
        if (err) {
            return res.status(403).json({
                error: `${err}`,
                message: "Token expired or tampred, Login again"
            });
        }
        next();
    });
}