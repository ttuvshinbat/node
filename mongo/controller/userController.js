const { validationResult } = require("express-validator");
const User = require("../models/user");

function get_users(req, res) {
  User.find({}, function (err, data) {
    if (err) res.json({ success: false, data: error });
    else res.json({ success: true, data: data });
  });
}
function create_users(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  } else {
    const data = req.body;
    User.create(data, function (err, data) {
      if (err) res.json({ success: false, data: error });
      else res.json({ success: true, data: data });
    });
  }
}
function updateUser(req, res) {
  const data = req.body;
  const id = req.param.id;
  User.updateOne({ _id: id }, data, function (err, data) {
    if (err) res.json({ success: false, data: error });
    else res.json({ success: true, data: data });
  });
}

module.exports = {
  get_users,
  create_users,
  updateUser,
};
