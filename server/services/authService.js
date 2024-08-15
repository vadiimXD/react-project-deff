const User = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt")
const { SECRET } = require("../config/config");

exports.registerUser = async (email, password, body) => {

    if (!body.email || !body.password || !body.repassword) {
        throw new Error("invalid values")
    }

    if (body.repassword !== body.password) {
        throw new Error("invalid values")
    }

    const salt = await bcrypt.genSalt();
    const saltedHash = await bcrypt.hash(password, salt);

    await User.create({ email, password: saltedHash })

    const user = await this.getUser(email);
    const token = await this.createToken(user._id);
    return {
        userId: user._id,
        token,
        email: user.email
    }
}

exports.getUser = async (email) => { return User.findOne({ email: email }) }

exports.getUserById = (userId) => { return User.findById(userId) }

exports.checkPassword = async (currentPassword, hashedPassword) => { return await bcrypt.compare(currentPassword, hashedPassword); }

exports.createToken = (id) => { return jwt.sign({ userId: id }, SECRET, { expiresIn: "2h" }) }

exports.loginUser = async (body) => {

    const user = await this.getUser(body.email)

    if (!user) {
        throw new Error("invalid email or password")
    }

    const isValid = await this.checkPassword(body.password, user.password)

    if (!isValid) {
        throw new Error("invalid email or password")
    }

    const token = await this.createToken(user._id);
    return {
        userId: user._id,
        token,
        email: user.email
    }
}

exports.updateProfile = (userId, body) => { return User.findByIdAndUpdate(userId, body) }


