const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const errorMessage = require('./errorMessage');

const userController = {};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.query;
  // console.log('username and password from req.query ', username, password)
  User.findOne({ username }, function (findErr, user) {
    if (findErr) return next(errorMessage('userController.verifyUser', findErr, 'Error verifying user. See server log'));
    if (user === null) return next(errorMessage('userController.verifyUser', 'user not found', 'Error verifying user. See server log'))
    bcrypt.compare(password, user.password, function (bcryptErr, matched) {
      if (bcryptErr) return next(errorMessage('userController.verifyUser', bcryptErr, 'Error verifying user. See server log'));
      if (!matched) return next(errorMessage('userController.verifyUser', 'invalid password', 'Error verifying user. See server log'));
      res.locals.user = { username: user.username, success: true };
      res.locals.userId = user._id.toString();
      return next();
    })
  })
}

userController.createUser = (req, res, next) => {
  // consider using mongo-sanitize from npm
  const submission = req.body;
  for (const key in submission) {
    if (typeof submission[key] !== 'string') return next({
      log: `Error in userController.createUser: invalid input`, 
      message: {err: 'Error creating user. See server log'}
    });
  }

  // should we consider a find before creating if bcrypt hashing is expensive?
  User.create(submission, (err, user) => {
    if (err) return next({
      log: `Error in userController.createUser: ${err}`, 
      message: {err: 'Error creating user. See server log'}
    });
    res.locals.message = `Created user ${user.username}`; // consider removing message
    res.locals.userId = user._id.toString();
    console.log(res.locals.message);
    return next();
  })
}

userController.deleteUser = (req, res, next) => {
  /**
   * LOGIC: a user should be deleted ONLY when they are logged in
   * Flow from verifyUser
   */
  User.deleteOne({username: res.locals.user.username}, function (err) {
    if (err) return next(errorMessage('userController.deleteUser', err, 'Error deleting user. See server log'));
    return next();
  })
}
module.exports = userController;
