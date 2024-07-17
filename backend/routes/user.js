// Import necessary modules

const express = require("express");
const {
  userRegisteration,
  userLogin,
  validUser,
  userLogout,
  sendingResetPassword,
  forgotPasswordTimeout,
  userChangePassword
} = require("../controllers/user");

const authenticate = require("../middleware/authenticate");
const router = new express.Router();

// User Registeration
router.post("/register", userRegisteration);
// User login
router.post("/login", userLogin);
// user logout
router.get("/logout",authenticate, userLogout);
// sending reset password to mail.
router.post("/sendpasswordlink", sendingResetPassword);
// verifying user for forgot password time.
router.get("/forgotpassword/:id/:token", forgotPasswordTimeout);
// changing password
router.post("/:id/:token", userChangePassword);

module.exports = router;
