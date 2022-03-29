var jwt = require("jsonwebtoken");
const Users = require("../models/user");
var bcrypt = require("bcryptjs");
const register = async (req, res, next) => {
  const data = req.body;
  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        status: "hereglegch burtgeltei baina.nevterch orno uu",
      });
    }
    var hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    data.role == 0 ? (data.role_id = 1) : (data.role_id = data.role);
    data.created_date = Date("Y-m-d");
    data.last_activity = Date("Y-m-d h:m:s");
    email = data.email;
    const token = jwt.sign(
      {
        user_id: data._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    Users.create(data)
      .then((data) => {
        return res.status(200).json({
          success: true,
          data: data,
          token: token,
        });
      })
      .catch((err) => {
        res.status(400).json({ succes: false, message: err });
      });
  } else {
    return res.json({ error: "the inpud field is empthy" });
  }
};

module.exports = {
  register,
};
