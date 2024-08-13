const Shoe = require("../models/Shoe")
const User = require("../models/User")

exports.createOffer = async (body) => {
    await Shoe.create(body)
    const product = await Shoe.findOne({ model: body.model })
    // await User.findByIdAndUpdate(body.owner, { $push: { createdOffers: product._id } })
    return product
}

exports.getAllShoes = () => { return Shoe.find() }

exports.updateProduct = (productId, body) => { return Shoe.findByIdAndUpdate(productId, body, { runValidators: true }) }

exports.getOneProduct = (productId) => { return Shoe.findById(productId) }

exports.buyProduct = async (productId, userId) => {
    await User.findByIdAndUpdate(userId, { $push: { boughtList: productId } })
    const phone = await Shoe.findById(productId);
    phone.boughtFrom = userId;
    await Shoe.findByIdAndUpdate(productId, phone)
}

exports.deleteProduct = (productId) => { return Shoe.findByIdAndDelete(productId) }

exports.searchProducts = async (brand) => {
    const query = {};

    if (brand) {
        const brandRegex = new RegExp('^' + brand, 'i');
        query.brand = { $regex: brandRegex }
    }

    if (!brand) {
        return undefined
    }

    return await Shoe.find(query)

}
