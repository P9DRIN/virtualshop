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
        required: false,
    },
    
})

export default mongoose.model("Account", accountsSchema)