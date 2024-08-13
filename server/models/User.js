const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    addedShoes: [{
        type: mongoose.Types.ObjectId,
        ref: "Shoe"
    }]
})

const User = mongoose.model("User", userSchema)

module.exports = User;