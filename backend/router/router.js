const express = require('express');
const router = express.Router();
const { createUser,getAllUsers ,updateUser} = require('../controller/userController'); // Adjust path if needed

// POST /users - Create a new user
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);

module.exports = router;
