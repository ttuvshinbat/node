const express = require("express");
const router = express.Router();
const Authcontroller = require("../controller/Authcontroller");
router.post("/register", Authcontroller.register);

module.exports = router;
