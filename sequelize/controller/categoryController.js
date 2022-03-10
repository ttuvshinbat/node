const Food = require('../models/food_category')
function foods_category(req,res){
    
    Food.findAll()
    .then((data) => res.json({ data: data }))
    .catch((err) => res.json({ data: err }));

}
module.exports = {foods_category}