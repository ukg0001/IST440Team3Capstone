const mongoose = require('mongoose');
const shoppingCartSchema = new mongoose.Schema({
    orderID: {type: Number},
    accountID: {type: Number},
    customerName: String,
    orderComplete: Boolean,
    products: [
        {
            productId: String,
            productName: String,
            productType: String,
            productBrand: String,
            productPrice: Number,
            productUPC: String,
            productQuantity: Number
        }
    ],
    itemQuantity: Number,
    orderTotal: Number,
    tax: Number,
    totalDue: Number
})
const Cart = mongoose.model('Cart', shoppingCartSchema);
module.exports = Cart;
