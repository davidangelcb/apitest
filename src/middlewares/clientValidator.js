// middlewares/clientValidation.js
import { body, validationResult } from 'express-validator';

export const validateClient = [
    body('firstname').notEmpty().withMessage('firstname is required'),
    body('lastname').notEmpty().withMessage('lastname is required'),
    body('dni').isLength({ min: 8, max: 8 }).withMessage('Type a valid DNI'),
    body('age').isInt({ min: 0 }).withMessage('please type a valid age'),
    body('linkedin').optional().isURL().withMessage('type a valid URL'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        req.body = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dni: req.body.dni,
            age: req.body.age,
            linkedin: req.body.linkedin === undefined ? '' : req.body.linkedin
        };
        next();
    }
];
