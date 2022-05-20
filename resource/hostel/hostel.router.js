const { protect, restrict } = require('../user/auth.controller');
const { getAllHostels, createHostel, setUserData } = require('./hostel.controller');

const hostelRouter = require('express').Router();

// param middleware function
hostelRouter.param('id', (req, res, next, id) => {
    console.log('hostel id:', id);
    next();
});

hostelRouter.use(protect);

hostelRouter
    .route('/')
    .get(restrict('admin'), getAllHostels)
    .post(restrict('user'), setUserData, createHostel);

module.exports = hostelRouter;
