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
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true, // return the updated document
            runValidators: true, // validate schema rules
        });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createUser,getAllUsers ,updateUser};
