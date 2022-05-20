const { createOne, getAll, getOne, deleteOne } = require('../../util/factory');
const productModel = require('./product.model');

// create a new product
exports.createProduct = createOne(productModel);

// get all products
exports.getAllProducts = getAll(productModel);

// get one product
exports.getOneProduct = getOne(productModel, {
    path: 'user',
    select: 'name email phone photo',
});

// delete one product
exports.deleteOneProduct = deleteOne(productModel);

// setUserData
exports.setUserData = (req, res, next) => {
    req.body.user = req.user.id;
    req.body.email = req.body.email || req.user.email;
    req.body.phone = req.body.phone || req.user.phone;
    next();
};
