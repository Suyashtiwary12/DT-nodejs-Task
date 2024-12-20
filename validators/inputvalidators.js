const { body, validationResult } = require('express-validator');

const inputSchema = [
    body("name")
        .notEmpty().withMessage("Username cannot be empty")
        .isString().withMessage("Username must be a string"),

    body("tagline")
        .notEmpty().withMessage("tagline is required")
        .isString().withMessage("tagline Incorrect"),
    body("schedule")
        .notEmpty().withMessage("schedule is required")
        .isString().withMessage("schedule Incorrect")
];

const createeventValidator = [
    ...inputSchema,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).send(errors.array()[0].msg);
        }
        next();
    }
];

module.exports = { createeventValidator }