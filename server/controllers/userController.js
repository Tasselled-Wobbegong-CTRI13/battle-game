const User = require('../models/userModel');

const userController = {};

// userController.getUsers = (req, res, next) => {
//     next();
// }

userController.createUser = (req, res, next) => {
  // consider using mongo-sanitize from npm
  const submission = req.body;
  console.log(submission);
  for (const key in submission) {
    // TODO: function to generate error messages
    if (typeof submission[key] !== 'string') return next({
      log: `Error in userController.createUser: invalid input`, 
      message: {err: 'Error creating user. See server log'}
    });
  }

  User.create(submission, (err, user) => {
    if (err) return next({
      log: `Error in userController.createUser: ${err}`, 
      message: {err: 'Error creating user. See server log'}
    });
    res.locals.message = `Created user ${user.username}`;
    return next();
  })
}

module.exports = userController;
