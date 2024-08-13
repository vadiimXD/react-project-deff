const Shoe = require("../models/Shoe")
const User = require("../models/User")


exports.getAllShoes = () => Shoe.find();

exports.getLastShoes = () => Shoe.find().sort({ _id: -1 }).limit(3);

exports.updateProduct = (productId, body) => Shoe.findByIdAndUpdate(productId, body, { runValidators: true });

exports.getOneProduct = (productId) => Shoe.findById(productId);

exports.deleteProduct = (productId) => Shoe.findByIdAndDelete(productId);

exports.createOffer = async (body) => {
    await Shoe.create(body)
    const product = await Shoe.findOne({ model: body.model })
    await User.findByIdAndUpdate(body.owner, { $push: { addedShoes: product._id } })
    return product
}

exports.buyProduct = async (productId, userId) => {
    await User.findByIdAndUpdate(userId, { $push: { boughtList: productId } })
    const phone = await Shoe.findById(productId);
    phone.boughtFrom = userId;
    await Shoe.findByIdAndUpdate(productId, phone)
}

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
