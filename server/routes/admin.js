var express = require('express');
const { adminLoginPage, adminLogin, protectedRoute, logoutAdmin, createAdmin, createAdminPage } = require('../controllers/adminControllers');
const { isLoggedIn } = require('../middleware/auth');
var router = express.Router();

/* GET users listing. */
router.route("/").get(adminLoginPage);
router.route("/login").post(adminLogin);
router.route("/protected").get(isLoggedIn, protectedRoute); // Created for just testing purpose
router.route("/logout").get(logoutAdmin);
router.route("/createAdmin").get(isLoggedIn,createAdminPage);
router.route("/createAdmin").post(isLoggedIn,createAdmin);

module.exports = router;
