const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/', userController.getUsers, (req, res) => res.status(200).send('made it'));

router.post('/', userController.createUser, (req, res) => res.status(201).json({success: true}));

router.get('/', userController.verifyUser, (req, res) => res.status(200).json(res.locals.user));

module.exports = router;
