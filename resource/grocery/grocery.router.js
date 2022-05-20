const { protect, restrict } = require('../user/auth.controller');
const {
    getAllGrocery,
    getOneGrocery,
    createGrocery,
    updateGrocery,
    deleteGrocery,
    setVendorData,
} = require('./grocery.controller');

const groceryRouter = require('express').Router();

groceryRouter.route('/').get(getAllGrocery);
groceryRouter.route('/:id').get(getOneGrocery);

groceryRouter.use(protect);

groceryRouter.route('/').post(restrict('vendor'), setVendorData, createGrocery);
groceryRouter
    .route('/:id')
    .patch(restrict('vendor'), updateGrocery)
    .delete(restrict('vendor'), deleteGrocery);

module.exports = groceryRouter;
