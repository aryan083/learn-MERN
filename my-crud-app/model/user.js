// models/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }N
});

// Create the User model
const User = mongoose.Schema('users', userSchema);

// Export a function to get the User model
module.exports = function getUserModel() {
    return User;
};
