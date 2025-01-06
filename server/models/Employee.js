const mongoose = require('mongoose'); // Corrected 'reqire' to 'require'

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Added validation
    email: { type: String, required: true, unique: true }, // Added validation and uniqueness
    password: { type: String, required: true } // Added validation
});

// Create the model
const EmployeeModel = mongoose.model("Employee", EmployeeSchema); // Changed collection name to singular

module.exports = EmployeeModel;
