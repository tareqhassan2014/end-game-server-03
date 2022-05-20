const {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne,
} = require('../../util/factory');
const groceryModel = require('./grocery.model');

// create a Grocery
exports.createGrocery = createOne(groceryModel);
// get all Grocery
exports.getAllGrocery = getAll(groceryModel);
// get one Grocery
exports.getOneGrocery = getOne(groceryModel);
// update a Grocery
exports.updateGrocery = updateOne(groceryModel);
// delete a Grocery
exports.deleteGrocery = deleteOne(groceryModel);

// setUserData
exports.setVendorData = (req, res, next) => {
    req.body.vendor = req.user.id;
    req.body.store = req.body.store || req.user?.store[0]?._id;

    next();
};
