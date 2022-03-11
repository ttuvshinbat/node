const {validationResult} = require('express-validator')
const Food_category = require('../models/food_category')
function foods_category(req,res){
        Food_category.findAll()
    .then((data) => res.json({ data: data }))
    .catch((err) => res.json({ data: err }));
}
function category_update(req,res){
    Food_category.update(req.body, { where: { id: req.params.id } })
    .then((data) => res.json({ data: "Boltson" }))
    .catch((err) => res.json({ err: "error" }))
}
module.exports = {foods_category,category_update}