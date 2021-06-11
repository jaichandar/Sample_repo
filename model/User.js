const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    author: { type: String, required: true },
    course: {
        type: Array
    },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, default: Date.now }
})
const User = mongoose.model('User', userSchema)
module.exports = User;
