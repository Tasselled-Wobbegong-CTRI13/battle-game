const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers, (req, res) => res.status(200).send('made it'));

module.exports = router;
