const Product = require('../models/Product');

//Filter Samsung Products
exports.getSamsung = (req, res) => {
    Product.find({productBrand: 'Samsung'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('samsung/samsung', {products})
    });
};

//Filter LG Products
exports.getLG = (req, res) => {
    Product.find({productBrand: 'LG'},(err, products) => {
      if (err) throw err;
      console.log(products);
    res.render('lg/lg', {products})
    });
};

//Filter GE Products
exports.getGE = (req, res) => {
  Product.find({productBrand: 'GE'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('ge/ge', {products})
  });
};

//Filter Ninja Products
exports.getNinja = (req, res) => {
  Product.find({productBrand: 'Ninja'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('ninja/ninja', {products})
  });
};

//Filter NutriBullet Products
exports.getNutriBullet = (req, res) => {
  Product.find({productBrand: 'NutriBullet'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('nutribullet/nutribullet', {products})
  });
};

//Filter Mr Coffee Products
exports.getMrCoffee = (req, res) => {
  Product.find({productBrand: 'Mr Coffee'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('mrCoffee/mrCoffee', {products})
  });
};

//Filter Black and Decker Products
exports.getBlackAndDecker = (req, res) => {
  Product.find({productBrand: 'Black and Decker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blackAndDecker/blackAndDecker', {products})
  });
};

//Filter Faberware Products
exports.getFaberware = (req, res) => {
  Product.find({productBrand: 'Faberware'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('faberware/faberware', {products})
  });
};

//Filter Hamilton Beach Products
exports.getHamiltonBeach = (req, res) => {
  Product.find({productBrand: 'Hamilton Beach'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('hamiltonBeach/hamiltonBeach', {products})
  });
};

//Filter Keurig Products
exports.getKeurig = (req, res) => {
  Product.find({productBrand: 'Keurig'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('keurig/keurig', {products})
  });
};

//Filter Salter Products
exports.getSalter = (req, res) => {
  Product.find({productBrand: 'Salter'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('salter/salter', {products})
  });
};

//Filter Blendtec Products
exports.getBlendtec = (req, res) => {
  Product.find({productBrand: 'Blendtec'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blendtec/blendtec', {products})
  });
};

//Filter Panasonic Products
exports.getPanasonic = (req, res) => {
  Product.find({productBrand: 'Panasonic'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('panasonic/panasonic', {products})
  });
};

//Filter Cosori Products
exports.getCosori = (req, res) => {
  Product.find({productBrand: 'Cosori'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('cosori/cosori', {products})
  });
};

//Filter NXR Products
exports.getNXR = (req, res) => {
  Product.find({productBrand: 'NXR'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('nxr/nxr', {products})
  });
};

//Filter Insignia Products
exports.getInsignia = (req, res) => {
  Product.find({productBrand: 'Insignia'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('insignia/insignia', {products})
  });
};

//Filter Magic Bullet Products
exports.getMagicBullet = (req, res) => {
  Product.find({productBrand: 'Magic Bullet'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('magicbullet/magicbullet', {products})
  });
};

//Filter Nespresso Products
exports.getNespresso = (req, res) => {
  Product.find({productBrand: 'Nespresso'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('nespresso/nespresso', {products})
  });
};

//Filter Amana Products
exports.getAmana = (req, res) => {
  Product.find({productBrand: 'Amana'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('amana/amana', {products})
  });
};

//Filter Bella Products
exports.getBella = (req, res) => {
  Product.find({productBrand: 'Bella'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('bella/bella', {products})
  });
};

//Filter Whirlpool Products
exports.getWhirlpool = (req, res) => {
  Product.find({productBrand: 'Whirlpool'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('whirlpool/whirlpool', {products})
  });
};

//Filter Emerald Products
exports.getEmerald = (req, res) => {
  Product.find({productBrand: 'Emerald'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('emerald/emerald', {products})
  });
};

//Filter Breville Products
exports.getBreville = (req, res) => {
  Product.find({productBrand: 'Breville'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('breville/breville', {products})
  });
};

//Filter Bosch Products
exports.getBosch = (req, res) => {
  Product.find({productBrand: 'Bosch'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('bosch/bosch', {products})
  });
};

//Filter Oster Products
exports.getOster = (req, res) => {
  Product.find({productBrand: 'Oster'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('oster/oster', {products})
  });
};

//Filter Cuisinart Products
exports.getCuisinart = (req, res) => {
  Product.find({productBrand: 'Cuisinart'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('cuisinart/cuisinart', {products})
  });
};

//Filter KitchenAid Products
exports.getKitchenAid = (req, res) => {
  Product.find({productBrand: 'KitchenAid'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('kitchenAid/kitchenAid', {products})
  });
};

//Filter Vitamix Products
exports.getVitamix = (req, res) => {
  Product.find({productBrand: 'Vitamix'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('vitamix/vitamix', {products})
  });
};

//Filter Refrigerator by Brand
exports.getSamsungRefrigerator = (req, res) => {
  Product.find({productBrand: 'Samsung', productType: 'Refrigerator'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('refrigerator/samsung', {products})
  });
};
exports.getLGRefrigerator = (req, res) => {
  Product.find({productBrand: 'LG', productType: 'Refrigerator'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('refrigerator/lg', {products})
  });
};
exports.getBoschRefrigerator = (req, res) => {
  Product.find({productBrand: 'Bosch', productType: 'Refrigerator'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('refrigerator/bosch', {products})
  });
};
exports.getGERefrigerator = (req, res) => {
  Product.find({productBrand: 'GE', productType: 'Refrigerator'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('refrigerator/ge', {products})
  });
};
exports.getInsigniaRefrigerator = (req, res) => {
  Product.find({productBrand: 'Insignia', productType: 'Refrigerator'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('refrigerator/insignia', {products})
  });
};
exports.getWhirlpoolRefrigerator = (req, res) => {
  Product.find({productBrand: 'Whirlpool', productType: 'Refrigerator'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('refrigerator/whirlpool', {products})
  });
};

//Filter Microwave by Brand
exports.getAmanaMicrowave = (req, res) => {
  Product.find({productBrand: 'Amana', productType: 'Microwave'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('microwaves/amana', {products})
  });
};
exports.getBlackAndDeckerMicrowave = (req, res) => {
  Product.find({productBrand: 'Black and Decker', productType: 'Microwave'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('microwaves/blackAndDecker', {products})
  });
};
exports.getGEMicrowave = (req, res) => {
  Product.find({productBrand: 'GE', productType: 'Microwave'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('microwaves/ge', {products})
  });
};
exports.getLGMicrowave = (req, res) => {
  Product.find({productBrand: 'LG', productType: 'Microwave'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('microwaves/lg', {products})
  });
};
exports.getPanasonicMicrowave = (req, res) => {
  Product.find({productBrand: 'Panasonic', productType: 'Microwave'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('microwaves/panasonic', {products})
  });
};
exports.getSamsungMicrowave = (req, res) => {
  Product.find({productBrand: 'Samsung', productType: 'Microwave'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('microwaves/samsung', {products})
  });
};

//Filter Coffee Maker by Brand
exports.getBellaCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Bella', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/bella', {products})
  });
};
exports.getCuisinartCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Cuisinart', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/cuisinart', {products})
  });
};
exports.getHamiltonBeachCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Hamilton Beach', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/hamiltonBeach', {products})
  });
};
exports.getKeurigCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Keurig', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/keurig', {products})
  });
};
exports.getMrCoffeeCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Mr Coffee', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/mrCoffee', {products})
  });
};
exports.getNespressoCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Nespresso', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/nespresso', {products})
  });
};
exports.getNinjaCoffeeMaker = (req, res) => {
  Product.find({productBrand: 'Ninja', productType: 'Coffee Maker'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('coffeeMakers/ninja', {products})
  });
};

//Filter Blenders by Brand
exports.getBlackAndDeckerBlenders = (req, res) => {
  Product.find({productBrand: 'Black and Decker', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/blackAndDecker', {products})
  });
};
exports.getBlendtecBlenders = (req, res) => {
  Product.find({productBrand: 'Blendtec', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/blendtec', {products})
  });
};
exports.getBrevilleBlenders = (req, res) => {
  Product.find({productBrand: 'Breville', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/breville', {products})
  });
};
exports.getHamiltonBeachBlenders = (req, res) => {
  Product.find({productBrand: 'Hamilton Beach', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/hamiltonBeach', {products})
  });
};
exports.getMagicBulletBlenders = (req, res) => {
  Product.find({productBrand: 'Magic Bullet', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/magicBullet', {products})
  });
};
exports.getNinjaBlenders = (req, res) => {
  Product.find({productBrand: 'Ninja', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/Ninja', {products})
  });
};
exports.getNutribulletBlenders = (req, res) => {
  Product.find({productBrand: 'NutriBullet', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/nutribullet', {products})
  });
};
exports.getOsterBlenders = (req, res) => {
  Product.find({productBrand: 'Oster', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/oster', {products})
  });
};
exports.getVitamixBlenders = (req, res) => {
  Product.find({productBrand: 'Vitamix', productType: 'Blender'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('blenders/vitamix', {products})
  });
};

//Filter Air Fryers by Brand
exports.getBellaAirFryers = (req, res) => {
  Product.find({productBrand: 'Bella', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/bella', {products})
  });
};
exports.getCosoriAirFryers = (req, res) => {
  Product.find({productBrand: 'Cosori', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/cosori', {products})
  });
};
exports.getCuisinartAirFryers = (req, res) => {
  Product.find({productBrand: 'Cuisinart', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/cuisinart', {products})
  });
};
exports.getEmeraldAirFryers = (req, res) => {
  Product.find({productBrand: 'Emerald', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/emerald', {products})
  });
};
exports.getFaberwareAirFryers = (req, res) => {
  Product.find({productBrand: 'Faberware', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/faberware', {products})
  });
};
exports.getInsigniaAirFryers = (req, res) => {
  Product.find({productBrand: 'Insignia', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/insignia', {products})
  });
};
exports.getNinjaAirFryers = (req, res) => {
  Product.find({productBrand: 'Ninja', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/ninja', {products})
  });
};
exports.getSalterAirFryers = (req, res) => {
  Product.find({productBrand: 'Salter', productType: 'Air Fryer'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('airFryers/salter', {products})
  });
};


//Filter Stoves by Brand
exports.getLGStoves = (req, res) => {
  Product.find({productBrand: 'LG', productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('stoves/lg', {products})
  });
};
exports.getSamsungStoves = (req, res) => {
  Product.find({productBrand: 'Samsung', productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('stoves/samsung', {products})
  });
};
exports.getNXRStoves = (req, res) => {
  Product.find({productBrand: 'NXR', productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('stoves/nxr', {products})
  });
};
exports.getAmanaStoves = (req, res) => {
  Product.find({productBrand: 'Amana', productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('stoves/amana', {products})
  });
};
exports.getWhirlpoolStoves = (req, res) => {
  Product.find({productBrand: 'Whirlpool', productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('stoves/whirlpool', {products})
  });
};
exports.getKitchenAidStoves = (req, res) => {
  Product.find({productBrand: 'KitchenAid', productType: 'Stove'},(err, products) => {
    if (err) throw err;
    console.log(products);
  res.render('stoves/kitchenAid', {products})
  });
};