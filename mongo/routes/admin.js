const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Authcontroller = require("../controller/Authcontroller");
router.post("/register", Authcontroller.register);
router.post("/login", Authcontroller.login);

module.exports = router;
