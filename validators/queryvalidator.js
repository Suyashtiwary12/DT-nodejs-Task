const { param, validationResult } = require('express-validator');

const querySchema = [
    param("id")
        .notEmpty().withMessage("Username cannot be empty")
        .isString().withMessage("Username must be a string"),
];

const createqueryValidator = [
    ...querySchema,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).send(errors.array()[0].msg);
        }
        next();
    }
];

module.exports = { createqueryValidator }