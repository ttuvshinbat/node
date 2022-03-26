const { validationResult } = require("express-validator");
const Food = require("../models/food");
const { Op } = require("sequelize");
const Category = require("../models/food_category");
function get_foods(req, res) {
  Food.findAll({
    include: [
      {
        model: Category,
      },
    ],
  })
    .then((data) => res.json({ data: data, succes: "true" }))
    .catch((err) => res.json({ data: err, succes: "false" }));
}
function get_lessOperator(req, res) {
  Food.findAll({ where: { stock: { [Op.lt]: 34 } } })
    .then((data) => res.json({ data: data }))
    .catch((err) => res.json({ data: err }));
}

function food_create(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({
        success: false,
        message: "ali 1 ym ni hooson esvel number string buruu baina",
      });
  } else {
    Food.create(req.body)
      .then((data) => res.json({ data: data }))
      .catch((err) => res.json({ data: err }));
  }
}
function food_update(req, res) {
  Food.update(req.body, { where: { id: req.params.id } })
    .then((data) => res.json({ data: "Boltson" }))
    .catch((err) => res.json({ err: "error" }));
}
function food_delete(req, res) {
  Food.destroy({ where: { id: req.params.id } })
    .then((data) => res.json({ data: "mhn" }))
    .catch((err) => res.json({ err: "bolq bn oo" }));
}
function food_one(req, res) {
  Food.findOne({ where: { id: req.params.id } })
    .then((data) => res.json({ data: data }))
    .catch((err) => res.json({ err: "bolq bn oo" }));
}
module.exports = {
  get_foods,
  food_create,
  food_update,
  food_delete,
  food_one,
  get_lessOperator,
};
