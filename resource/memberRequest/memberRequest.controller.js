const { createOne, deleteOne, getAll } = require('../../util/factory');
const memberRequestModel = require('./memberRequest.model');

// create memberRequest
exports.createMemberRequest = createOne(memberRequestModel);

// get all memberRequest
exports.getAllMemberRequest = getAll(memberRequestModel);

// delete memberRequest
exports.deleteMemberRequest = deleteOne(memberRequestModel);

//set user data
exports.setUserData = (req, res, next) => {
    req.body.user = req.user._id;
    next();
};
