const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get user data
router.get('/user', authMiddleware, getUser);

module.exports = router;
