const express = require("express");
const authController = require("../controller/auth.controller");

const router = express.Router();

router.post("/signup", authController.signUpUser);
router.post("/login", authController.loginUser);
router.post("/signout", authController.logoutUser);

module.exports = router;
