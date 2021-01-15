const { interfaces } = require('mocha');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: { type: String, unique: true },
    productName: String,
    productPrice: Number,
    productDescription: String,
    productBrand: String,
    productUPC: {type: String, unique: true},
    productType: String,
    productQuantity: Number
})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;