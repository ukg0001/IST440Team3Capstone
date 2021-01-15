const Product = require("../models/Product");
const User = require("../models/User");
const Cart = require("../models/Cart");
const EDI = require("../models/EDI");
const fs = require('fs');
// const { Start } = require("twilio/lib/twiml/VoiceResponse");
// const { fakeServer } = require("sinon");

exports.viewShoppingcart = (req, res) => {
  // Find if the user is logged in
  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    // Find is the user has a cart to display
        Cart.findOne({ accountID: users.accountID, orderComplete: false},(err, carts) => {
			if (err) throw err;
			if(carts) {
				if(carts.products.length > 0) {
					console.log(carts);
					return res.render('shoppingCart', { carts });
				}
          }
          // User can't view cart because there are no items in it
				req.flash('info', {msg: 'There are no items in your shopping cart.'})
				return res.redirect('/');
			});
		});
};

 exports.addItem = (req, res) => {
   console.log("Item add")
   const product = new Product({
     productId: req.query.productId,
     productName: req.query.productName,
     productType: req.query.productType,
     productBrand: req.query.productBrand,
     productDescription: req.query.productDescription,
     productPrice: req.query.productPrice,
     productUPC: req.query.productUPC,
     productQuantity: 1,
    });
    console.log(product);
    // Find if the user logged in
    User.findOne({loggedIn: true}, (err, users) => {
      if(err) throw err;
      if(!users) {
        // User must have an account to add items to cart
        req.flash('info', {msg: 'Please login or create an account to proceed'});
        return res.redirect('/');
      }
      // Add products to already existing cart
      Cart.findOne({accountID: users.accountID, orderComplete: false}, (err, carts) => {
        if (err) throw err;
        if(carts) {
          for (item in carts.products) {
            if (carts.products[item].productName == req.query.productName) {
              console.log('Found Product: ' + carts.products[item].productName);
              req.flash('info', {msg: 'Product already exists in cart.'});
              return res.redirect('/cart');
            }
          }
            carts.products.push(product);
            carts.itemQuantity++;
            carts.orderTotal += product.productPrice;
            //carts.tax += (orderTotal * 0.06);
            //carts.totalDue += (orderTotal + tax);
            carts.save();
            return res.redirect('/cart');
          }
          // If a cart does not exist, create a new cart and add products to that
          if (!carts) {
            const cart = new Cart({
              orderID: Math.floor((Math.random() * 500) + 1),
              accountID: users.accountID,
              customerName: users.username,
              products: [],
              itemQuantity: 0,
              orderTotalTotal: 0,
              orderComplete: false
            });
            cart.products.push(product);
            cart.itemQuantity++;
            cart.orderTotal = product.productPrice;
            //cart.tax = orderTotal * 0.06;
           // cart.totalDue = orderTotal + tax;
            cart.save();
            return res.redirect('/');
          };
      });
  });
};

exports.updateProduct = (req, res) => {
  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    // Find user cart
    Cart.findOne({accountID: users.accountID, orderComplete: false}, (err, carts) => {
      if (err) throw err;
      
      var updatedProduct = 0;
      var itemQuantity = 0;
      var orderTotal = 0;
      // Update quantity of desired product
      for (product in carts.products){
        console.log('Product Name:' + carts.products[product].productName);
        console.log('Request Name:' + req.query.productName);
        if (carts.products[product].productName == req.query.productName){
          console.log('Found Product:' + carts.products[product].productName);
          updatedProduct = carts.products.indexOf(carts.products[product]);
        }
      }
    carts.products[updatedProduct].productQuantity = req.body[`quantity${carts.products[updatedProduct].productID}`] ||1;

    for (product in carts.products){
      itemQuantity = itemQuantity + carts.products[product].productQuantity;
      orderTotal = orderTotal + (carts.products[product].productQuantity * carts.products[product].productPrice)
      console.log(carts.products[product].productQuantity);
    }
    carts.itemQuantity = itemQuantity;
    carts.orderTotal = orderTotal;

    carts.save();
    req.flash('success', { msg: 'Product Quantity Updated.'});
    res.redirect('/cart');
    });
  });
};

exports.removeItem = (req, res) => {
  // Find if user is logged in
  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    // Find the cart
    Cart.findOne({accountID: users.accountID, orderComplete: false}, (err, carts) => {
      if (err) throw err;
      var removeItem = 0;
      var itemQuantity = 0;
      var orderTotal = 0;

      // Set the index of the item to delete
      for (product in carts.products){
        console.log('Product Name:' + carts.products[product].productName);
        console.log('REQ Name:' + req.query.productName);
        if (carts.products[product].productName == req.query.productName){
          console.log('Found Product:' + carts.products[product].productName);
          removeItem = carts.products.indexOf(carts.products[product]);
          console.log('Delete Product:' + removeItem);
        }
      }

    // Remove the product from cart
    carts.products.remove(carts.products[removeItem]);

    for (product in carts.products){
      itemQuantity = itemQuantity + carts.products[product].productQuantity;
      orderTotal = orderTotal + (carts.products[product].productQuantity * carts.products[product].productPrice)
      console.log(carts.products[product].productQuantity);
    }

    carts.itemQuantity = itemQuantity;
    carts.orderTotal = orderTotal;

    carts.save();
    req.flash('success', { msg: 'Product Removed From Cart.'});
    res.redirect('/cart');
    });
  });
};

exports.getCheckout = (req, res) => {
  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    Cart.findOne({orderComplete: false, accountID: users.accountID}, (err, carts) => {
      res.render('checkout', {users, carts});
    })
  })
};

exports.receipt = (req, res) => {
  // Find the user
  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    Cart.findOne({orderComplete: false, accountID: users.accountID}, (err, carts) => {
      res.render('receipt', {users,carts});
      // Mark order as complete
      carts.orderComplete= true;
      carts.save();
    })
  })
};

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();

  return yyyy + mm + dd;
}
exports.processOrder = (req, res) => {

  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    Cart.findOne({accountID: users.accountID, orderComplete: false}, (err, carts) => {
      if (err) throw err;

      var TCN = Math.floor((Math.random() * 999999999) + 1);

      EDI.findOne({ST02: TCN}, (err, edi) => {
        if (err) throw err;
        if (edi) {
          res.redirect('/home');
        }
        if (!edi) {
          var totalLineItems = 0
      for (product in carts.products) {
        totalLineItems++;
      }
      const ediDoc = new EDI({
        transactionHeader: {
          ST01: 850, // Transaction Type
          ST02: TCN // Transaction Control Number
        },
        beginningSegment: {
        BEG01: '00', // New Purchase Order
        BEG02: 'SA', // Order Type (SA = Stand Alone Order)
        BEG03: Math.floor((Math.random() * 999) + 1), // Purchase Order (PO) Number
        BEG05: convertDate(new Date()) // PO Date YYYYMMDD
        },
        dateTimeQualifier: {
        DTM01: 106, // Qualifier Delivery Requested (106 = "Required By")
        DTM02: convertDate(new Date()) // Received Date
        },
        vendorInformation: {
          N101: 'BY', // Entity Identifuer Code
          N102: users.username, // Party Name
          N103: 91, // Assigned By Seller Number
          N104: users._id // Vendor Customer Number
        },
        addressInformation: {
        N301: users.profile.shippingAddress, // Address Information
        N401: users.profile.shippingCity, // City
        N402: users.profile.shippingState, // State
        N403: users.profile.shippingZip // Zip
        },
        lineItems: [], // Item Being Added To The Purchase Order
        transactionTotal: {
        CTT01: totalLineItems, // Total Line Items
        CTT02: carts.itemQuantity // Total Units Purchased
        },
        transactionSetTrailer: {
        SE01: 0, // Total Segments Between ST and SE
        SE02: TCN // Transaction Control Number
        }
      });

      var lineCounter = 1;
      for (product in carts.products) {
        productIndex = carts.products.indexOf(carts.products[product]);
      ediDoc.lineItems.push(new Object({
        PO101: lineCounter, // Line Item Number
        PO102: carts.products[productIndex].productQuantity, // Item Quantity
        PO103: 'USD', // Unit Of Measure
        PO104: carts.products[productIndex].productPrice, // Item Price
        PO106: 'IN', // Item Number Qualifier
        PO107: carts.products[productIndex].productId, // Item Code
        PO108: 'BC', // Item Code Qualifier
       // PO109: carts.products[productIndex].productName, // Catalog Number
        PO10: 'SN', // Serial Number Qualifier
        PO11: Math.floor((Math.random() * 99999) + 1), // Serial Number
        PID01: 'F', // Qualifier Free
        PID05: carts.products[productIndex].productBrand // Product Brand
      }));
      lineCounter++;
      }

      ediDoc.save();
      const ediString = JSON.stringify(ediDoc);

      var parsedData = JSON.parse(ediString);
      var ST = 'ST'
      var BEG = 'BEG'
      var DTM = 'DTM'
      var N1 = 'N1'
      var N4 = 'N4'
      var PO1 = 'PO1'
      var CTT = 'CTT'
      var PID = 'PID'
      var SE = 'SE'
      var STAR = '*'
      var END = ';'
      var NEWLINE = '\n'
      var lineItemStrings = []

      // Transaction Header
      var ST01 = parsedData.transactionHeader.ST01
      var ST02 = parsedData.transactionHeader.ST02

      //BEG Segment
      var BEG01 = parsedData.beginningSegment.BEG01
      var BEG02 = parsedData.beginningSegment.BEG02
      var BEG03 = parsedData.beginningSegment.BEG03
      var BEG05 = parsedData.beginningSegment.BEG05

      //Date Time Qualifier
      var DTM01 = parsedData.dateTimeQualifier.DTM01
      var DTM02 = parsedData.dateTimeQualifier.DTM02

      //Vendor Information
      var N101 = parsedData.vendorInformation.N101
      var N102 = parsedData.vendorInformation.N102
      var N103 = parsedData.vendorInformation.N103
      var N104 = parsedData.vendorInformation.N104

      //Address Information
      var N301 = parsedData.addressInformation.N301
      var N401 = parsedData.addressInformation.N401
      var N402 = parsedData.addressInformation.N402
      var N403 = parsedData.addressInformation.N403

      //Line Item
      for (item in ediDoc.lineItems)
      {
        currentItem = ediDoc.lineItems.indexOf(ediDoc.lineItems[item])
        var PO101 = parsedData.lineItems[currentItem].PO101
        var PO102 = parsedData.lineItems[currentItem].PO102
        var PO103 = parsedData.lineItems[currentItem].PO103
        var PO104 = parsedData.lineItems[currentItem].PO104
        var PO106 = parsedData.lineItems[currentItem].PO106
        var PO107 = parsedData.lineItems[currentItem].PO107
        var PO108 = parsedData.lineItems[currentItem].PO108
        //- var PO109 = parsedData.lineItems[currentItem].PO109
        var PO10 = parsedData.lineItems[currentItem].PO10
        var PO11 = parsedData.lineItems[currentItem].PO11
        var PID01 = parsedData.lineItems[currentItem].PID01
        var PID05 = parsedData.lineItems[currentItem].PID05

        lineItemStrings.push(PO1 + STAR + PO101 + STAR + PO102 + STAR + PO103 + STAR + PO104 + STAR + PO106 + STAR + PO107 + STAR + PO108 + STAR + STAR + PO10 + STAR + PO11 + STAR + END + NEWLINE + PID + STAR + PID01 + STAR + STAR + STAR + PID05 + END + NEWLINE)
      }
      var finalLineItemString = lineItemStrings.join('').toString()

      //Transaction Total
      var CTT01 = parsedData.transactionTotal.CTT01
      var CTT02 = parsedData.transactionTotal.CTT02

      // Transaction Trailer
      var SE01 = 5 + (lineItemStrings.length * 2)
      var SE02 = parsedData.transactionSetTrailer.SE02

      fs.appendFile('C:/Users/Urjita Gandevia/abist440fa20Team3/EDI_TEXT_DOCUMENTS/Team3_EDI_DATA.txt',
      ST + STAR + ST01 + STAR + ST02 + END + NEWLINE + 
      BEG + STAR + BEG01 + STAR + BEG02 + STAR + BEG03 + STAR + STAR + BEG05  + END + NEWLINE +
      DTM + STAR + DTM01 + STAR + DTM02 + END + NEWLINE +
      N1 + STAR + N101 + STAR + N102 + STAR + N103 + STAR + N104 + END + NEWLINE +
      finalLineItemString +
      CTT + STAR + CTT01 + STAR + CTT02 + END + NEWLINE +
      SE + STAR + SE01 + STAR + SE02 + END + NEWLINE, (err) => {
        if (err) return console.log(err);
        console.log('Text EDI Written');
      });

      fs.writeFile('C:/Users/Urjita Gandevia/abist440fa20Team3/EDI_TEXT_DOCUMENTS/AccountID_' + users.accountID + '_OrderID_' + carts.orderID + '_EDI.txt', ediString, (err) =>{
        if (err) return console.log(err);
        console.log('JSON EDI Writtin');
      });
        }
      });  
    
      carts.orderComplete = true;
      carts.save();
     // users.previousOrders.push(carts);
      users.save();
      res.render('receipt', {users, carts});
      
    })
  })
};

/*exports.receipt = (req, res) => {
  User.findOne({loggedIn: true}, (err, users) => {
    if (err) throw err;
    Cart.findOne({orderComplete: false}, (err, carts) => {
      if (err) throw err;
      console.log(carts);
      if (err) throw err;
      // Personal information
      user.profile.name = req.body.name ||'';
      user.email = req.body.email || '';
      //Billing Address
      user.profile.billingAddress = req.body.billingAddress ||'';
      user.profile.billingCity = req.body.billingCity ||'';
      user.profile.billingState = req.body.billingState ||'';
      user.profile.billingZip = req.body.billingZip ||'';

    //Shipping Address
      user.profile.shippingAddress = req.body.shippingAddress ||'';
      user.profile.shippingCity = req.body.shippingCity ||'';
      user.profile.shippingState = req.body.shippingState ||'';
      user.profile.shippingZip = req.body.shippingZip ||'';
      users.save();
  });
})
  res.redirect('/receipt')
};*/
