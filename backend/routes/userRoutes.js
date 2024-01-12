const express = require('express');
const userController = require('../controller/userController');
const upload = require('../utils/upload.js'); // Make sure this path is correct

const router = express.Router();

// User registration route
router.post('/register', upload.single('profilepic'), userController.registerUser);

// User login route
router.post('/login', userController.loginUser);

module.exports = router;
