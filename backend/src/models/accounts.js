const mongoose = require('mongoose');

const accountsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    
})

module.exports = mongoose.model("Account", accountsSchema)