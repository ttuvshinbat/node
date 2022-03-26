const express = require("express");
const router = express.Router();
const Food = require("../models/food");
const User = require("../models/user");
const order = require("../models/order");
const middleware = require("../middleware/create_update");
const foodController = require("../controller/foodController");
const userController = require("../controller/userController");
router.get("/foods", foodController.get_foods);
router.post("/createfood", middleware.createfood(), foodController.create_food);
router.post("/updatefood/:id", foodController.updatefood);
router.get("/deletefood/:id", foodController.deletefood);

router.get("/users", userController.get_users);
router.post(
  "/createuser",
  middleware.createuser(),
  userController.create_users
);
router.post("/updateuser/:id", userController.updateUser);
module.exports = router;
