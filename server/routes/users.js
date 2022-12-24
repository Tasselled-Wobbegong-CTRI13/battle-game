const express = require('express');
const { UNSAFE_NavigationContext } = require('react-router-dom');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/', userController.getUsers, (req, res) => res.status(200).send('made it'));

router.post('/', userController.createUser, (req, res) => res.status(201).send(Buffer.from(res.locals.message)));

module.exports = router;
