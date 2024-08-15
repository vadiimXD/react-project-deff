const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email!"],
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: [3,"Min password length is 3!"],
    },
    addedShoes: [{
        type: mongoose.Types.ObjectId,
        ref: "Shoe"
    }]
})

const User = mongoose.model("User", userSchema)

module.exports = User;