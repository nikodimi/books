/**
 * User Validation Rules 
 */

const { body } = require('express-validator');

const createRules = [
    body('username').exists().isLength({ min: 3}),
    body('password').exists().isLength({ min: 2}),
    body('first_name').exists().isLength({ min: 4}),
    body('last_name').exists().isLength({ min: 5})
];

// allow only password, first_name, last_name to be updated, and only optionally
const updateRules = [
    body('password').optional().isLength({ min: 2}),
    body('first_name').optional().isLength({ min: 4}),
    body('last_name').optional().isLength({ min: 3})
];

module.exports = {
    createRules,
    updateRules
}