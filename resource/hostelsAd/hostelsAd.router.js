const { protect, restrict } = require('../user/auth.controller');
const {
    createHostelsAd,
    getAllHostelsAd,
    getOneHostelsAd,
    updateHostelsAd,
    deleteHostelsAd,
    setHostelsData,
} = require('./hostelsAdController');

const hostelsAdRouter = require('express').Router();

hostelsAdRouter
    .route('/')
    .post(protect, restrict('admin'), setHostelsData, createHostelsAd)
    .get(getAllHostelsAd);
hostelsAdRouter
    .route('/:id')
    .get(getOneHostelsAd)
    .put(updateHostelsAd)
    .delete(deleteHostelsAd);

module.exports = hostelsAdRouter;
