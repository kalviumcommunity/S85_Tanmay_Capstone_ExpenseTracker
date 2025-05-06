const User = require('../schema'); // Adjust path as needed

// Create a new user
const createUser = async (req, res) => {
    try {
        const { user_name, user_email, user_dob, gender } = req.body;

        const newUser = new User({
            user_name,
            user_email,
            user_dob,
            gender,
        });

        const savedUser = await newUser.save();
        console.log(savedUser);
        
      return  res.status(201).json(savedUser);
        
    } catch (error) {
     return   res.status(400).json({ message: error.message });
    }
};
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // You can also add filters here
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { createUser,getAllUsers };
