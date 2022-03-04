/**
 * User Validation Rules 
 */

const { body } = require('express-validator');

const createRules = [
    body('first_name').exists().isLength({ min: 4}),
    body('last_name').exists().isLength({ min: 5}),
    body('birthyear').exists().isLength({ min: 4})
];

// allow only password, first_name, last_name to be updated, and only optionally
const updateRules = [
    body('first_name').optional().isLength({ min: 4}),
    body('last_name').optional().isLength({ min: 4}),
    body('birthyear').optional().isInt({ min: 1900, max: 1999})
];

module.exports = {
    createRules,
    updateRules
}