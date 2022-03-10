const express = require('express')
const router = express.Router()
const Food = require('../models/food')
const Food_category = require('../models/food_category')
const FoodController = require("../controller/foodController")
const categoryController = require('../controller/categoryController')
const middleware = require('../middleware/create_update')
router.use('/food', FoodController.get_foods)
router.use('/foodscreate', middleware.createfood(), FoodController.food_create)
router.post("/updateFood", FoodController.food_update)
router.post('/fooddelete/:id', FoodController.food_delete)
router.get('/foods/:id', FoodController.food_one)
router.use('/category',categoryController.foods_category)
// router.get('/foods/', foodController.get_foods)
module.exports = router;