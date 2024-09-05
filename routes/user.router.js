const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const passport = require("passport");
const userController = require("../controllers/User.js")

router.use(cookieParser("secretCode"));


//logout router
router.post('/logout', userController.logout);
// Signup route
router.post("/signup", userController.signup);
// Login route
router.post('/login', passport.authenticate('local'), userController.login);

router.get("/login/success",userController.success );

module.exports = router;