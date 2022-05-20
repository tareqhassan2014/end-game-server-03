// create store controller

const { createOne, getAll } = require('../../util/factory');
const storeModel = require('./store.model');

exports.createStore = createOne(storeModel);
exports.getAllStores = getAll(storeModel);

// setUserData
exports.setVendorData = (req, res, next) => {
    req.body.vendor = req.user.id;
    req.body.email = req.body.email || req.user?.email;
    req.body.phone = req.body.phone || req.user?.phone;

    next();
};
