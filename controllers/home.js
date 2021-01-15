const Product = require("../models/Product");
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  Product.find({},(err, products) => {
    if (err) throw err;
    //console.log(products);
  res.render('home', {product: products})
  });
};

//git push test