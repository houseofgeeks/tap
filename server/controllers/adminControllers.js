const Admin = require("../models/admin_model");
const jwt = require('jsonwebtoken');

const options = {
    expires: new Date(
        Date.now() + 1 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
};


exports.adminLoginPage = (req, res) => {
    res.render("index");
}

exports.adminLogin = async (req, res) => { // 
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.json({
                success: false,
                message:"email or password not provided"
            });
        }
        const user = await Admin.findOne({ username }).select("+password");

        if (!user) {
            return res.json({
                success: false,
                message:"email or password not provided"
            });
        }

        const isPasswordMatch = await user.comparePassword(password);
        console.log(isPasswordMatch);

        if(isPasswordMatch === false) {
            return res.json({
                success: false,
                message:"email or password not provided"
            });
        }

        const accessToken = jwt.sign({ userRole: user }, process.env.JWT_SECRET, { expiresIn: "12h" }); // temporarily
        return res
                .cookie("accessToken", accessToken, options)
                .json({
            success: true,
            accessToken,
        });
    } catch (error) {
        console.log(error);
    }
}


exports.protectedRoute = (req, res) => {
    // jwt.verify
    res.send("Hello world!! here is your protected data!!!");
}

exports.logoutAdmin = (req, res) => {
    res.cookie("accessToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
}

// Register Controller
exports.createAdmin = async (req, res) => {
    try {
        const newAdmin = await Admin.create(req.body);

        res.status(200).json({
            success: true,
            newAdmin
        })
    } catch (error) {
        console.log(error);
    }
}

exports.createAdminPage = (req, res) => {
    res.render("admin");
}