const { protect, restrict } = require('../user/auth.controller');
const {
    getAllStores,
    createStore,
    setUserData,
    setVendorData,
} = require('./store.controller');

const storeRouter = require('express').Router();

storeRouter.use(protect);

storeRouter
    .route('/')
    .get(restrict('super-admin'), getAllStores)
    .post(restrict('user'), setVendorData, createStore);

module.exports = storeRouter;
