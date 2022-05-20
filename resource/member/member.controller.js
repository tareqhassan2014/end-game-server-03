const { createOne, getAll, deleteOne } = require('../../util/factory');
const memberModel = require('./member.model');

// create member
exports.createMember = createOne(memberModel);

// get all members
exports.getAllMembers = getAll(memberModel);

// delete member
exports.deleteMember = deleteOne(memberModel);
