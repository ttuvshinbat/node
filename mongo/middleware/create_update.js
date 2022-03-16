const {body, validationResult} = require('express-validator');

const createfood = () => {
    return [
        body('name').notEmpty(),
        body('price').notEmpty().withMessage('price is empty'),
        body('discount').isNumeric().isLength({min: 0, max:100}),
        body('stock').notEmpty().isLength({min:1}),
       body('recipe').notEmpty(),
        body("categoryId").isNumeric()

    ]
}
exports.createfood= createfood;
