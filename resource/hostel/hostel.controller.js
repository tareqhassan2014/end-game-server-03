const Hostel = require('./hostel.model');
const catchAsync = require('../../middleware/catchAsync');
const { createOne, getAll } = require('../../util/factory');

//createHostel
const createHostel = createOne(Hostel);
//getAllHostels
const getAllHostels = getAll(Hostel);

// setUserData
const setUserData = (req, res, next) => {
    req.body.admin = req.user.id;
    req.body.email = req.body.email || req.user.email;
    req.body.phone = req.body.phone || req.user.phone;
    next();
};

module.exports = {
    createHostel,
    getAllHostels,
    setUserData,
};
