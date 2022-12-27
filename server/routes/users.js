const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/', userController.getUsers, (req, res) => res.status(200).send('made it'));

router.post('/', userController.createUser, (req, res) => res.status(201).json({success: true}));

router.get('/', (req, res, next) => console.log(req.query))

module.exports = router;
