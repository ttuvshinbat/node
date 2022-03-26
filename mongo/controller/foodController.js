const { validationResult } = require("express-validator");
const Food = require("../models/food");

function get_foods(req, res) {
  Food.find({}, function (err, data) {
    if (err) res.json({ success: false, data: error });
    else res.json({ success: true, data: data });
  });
}
function create_food(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  } else {
    const data = req.body;
    Food.create(data, function (err, data) {
      if (err) res.json({ success: false, data: error });
      else res.json({ success: true, data: data });
    });
  }
}
function updatefood(req, res) {
  const data = req.body;
  const id = req.param;
  console.log(req.param);
  Food.updateOne({ _id: id }, data, function (err, data) {
    if (err) res.json({ success: false, data: error });
    else res.json({ success: true, data: data });
  });
}
function deletefood(req, res) {
  const data = req.body;
  const id = req.param.id;
  Food.deleteOne({ _id: id }, data, function (err, data) {
    if (err) res.json({ success: false, data: data });
    else res.json({ success: true, data: " data deleted" });
  });
}
module.exports = {
  get_foods,
  create_food,
  updatefood,
  deletefood,
};
