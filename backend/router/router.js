const express = require('express');
const router = express.Router();
const { createUser } = require('../controller/userController'); // Adjust path if needed

// POST /users - Create a new user
router.post('/users', createUser);

module.exports = router;
