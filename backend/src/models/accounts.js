import mongoose from 'mongoose'

const accountsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    housenumber: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    
})

export default mongoose.model("Account", accountsSchema)