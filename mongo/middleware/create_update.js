const { body, validationResult } = require("express-validator");

const createfood = () => {
  return [
    body("name").notEmpty().withMessage("name is empty"),
    body("price").notEmpty().withMessage("price is empty"),
    body("discount")
      .isNumeric()
      .isLength({ min: 0, max: 100 })
      .withMessage("discount is empty or numeric"),
    body("stock")
      .notEmpty()
      .isLength({ min: 1 })
      .withMessage("stock is empty numeric min 1"),
    body("category.name").notEmpty().withMessage("category.name is empty"),
  ];
};

const createuser = () => {
  return [
    body("name").notEmpty().withMessage("name is empty"),
    body("email").notEmpty().withMessage("email is empty"),
    body("phone")
      .isNumeric()
      .isLength({ min: 8, max: 15 })
      .withMessage("phone is empty or min:8"),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage("password is empty numeric min :6"),
    body("address").notEmpty().withMessage("address is empty"),
    body("role_id").notEmpty().withMessage("role_id is empty or or number"),
    body("created_date")
      .notEmpty()
      .withMessage("created_Date is not empthy string"),
  ];
};
exports.createfood = createfood;
exports.createuser = createuser;
