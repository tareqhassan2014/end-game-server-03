// create hostel's ad controller

const {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne,
} = require('../../util/factory');
const hostelsAdModel = require('./hostelsAd.model');

// create hostel's ad
exports.createHostelsAd = createOne(hostelsAdModel);
exports.getAllHostelsAd = getAll(hostelsAdModel);
exports.getOneHostelsAd = getOne(hostelsAdModel);
exports.updateHostelsAd = updateOne(hostelsAdModel);
exports.deleteHostelsAd = deleteOne(hostelsAdModel);

// set hostel's data to hostel's ad
exports.setHostelsData = (req, res, next) => {
    req.body.hostel = req.user.hostel[0]?._id;
    req.body.phone = req.body.phone || req.user.hostel[0]?.phone;
    next();
};
