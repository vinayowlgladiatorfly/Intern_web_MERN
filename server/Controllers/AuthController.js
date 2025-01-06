const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/user");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, please login',
                success: false
            });
        }

        // Create new user and hash password
        const newUser = new UserModel({ name, email });
        newUser.password = await bcrypt.hash(password, 10);

        // Save user to the database
        await newUser.save();

        res.status(201).json({
            message: "Signup successfully",
            success: true
        });
    } catch (err) {
        // Log the error for better debugging
        console.error("Error during signup:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        const errorMsg = 'Auth failed, email or password is wrong';

        // Check if user exists
        if (!user) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // Compare the password with the hashed password
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({
                message: errorMsg,
                success: false
            });
        }

        // Ensure the JWT_SECRET is defined
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: 'Internal server error: missing JWT secret',
                success: false
            });
        }

        // Create a JWT token
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        // Log the error for better debugging
        console.error("Error during login:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

module.exports = {
    signup,
    login
};
