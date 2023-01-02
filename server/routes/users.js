const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

router.post('/', 
    userController.createUser,
    sessionController.startSession,
    cookieController.setSSIDCookie,
    (req, res) => res.status(201).json({success: true}));

router.get('/', 
    userController.verifyUser, 
    sessionController.startSession,
    cookieController.setSSIDCookie,
    (req, res) => res.status(200).json(res.locals.user));

router.delete(
  '/',
  userController.verifyUser,
  userController.deleteUser,
  (req, res) => res.status(200).json({ success: true })
);

router.patch(
  '/',
  userController.verifyUser,
  userController.changePassword,
  (req, res) => {
    res
      .status(200)
      .json({ success: true, message: 'password updated successfully' });
  }
);

module.exports = router;
