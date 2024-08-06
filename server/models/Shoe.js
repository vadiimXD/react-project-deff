const mongoose = require("mongoose")

const ShoeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
        match: [/^https?:\/\//, "invalid url"],
    },
    release: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    // shoppingCart: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Phone"
    // }],
    // boughtFrom: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})


const Shoe = mongoose.model("Shoe", ShoeSchema)

module.exports = Shoe;
