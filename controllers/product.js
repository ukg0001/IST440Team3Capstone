const Product = require('../models/Product');

exports.getRefrigerators = (req, res) => {
    Product.find({productType: 'Refrigerator'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/refrigerators', {products})
    });
};
exports.getMicrowaves = (req, res) => {
    Product.find({productType: 'Microwave'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/microwaves', {products})
    });
};
exports.getCoffeemakers = (req, res) => {
    Product.find({productType: 'Coffee Maker'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/coffeemakers', {products})
    });
};
exports.getBlenders = (req, res) => {
    Product.find({productType: 'Blender'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('products/blenders', {products})
    });
};
exports.getAirfryers = (req, res) => {
  Product.find({productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('products/airfryers', {products})
  });
};
exports.getStoves = (req, res) => {
  Product.find({productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('products/stoves', {products})
  });
};

exports.getAllProducts = (req, res) => {
  if (req.query.search) {
    const regex = new RegExp(escapeRange(req.query.search), 'gi');
    Product.find({ProductName: 'Microwave'}, function(err, products) {
      if (err) {
      console.log(err);
      } else {
        res.render('products/products', {products: products});
      }
    })
  }
}

function escapeRange(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
  
  