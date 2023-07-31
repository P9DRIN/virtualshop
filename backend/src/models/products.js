const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
})

module.exports = mongoose.model("Products", productSchema)