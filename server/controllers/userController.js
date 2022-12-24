const User = require('../models/userModel');

const userController = {};

userController.getUsers = (req, res, next) => {
    next();
}

module.exports = userController;
