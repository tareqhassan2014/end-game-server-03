const { protect } = require('../user/auth.controller');
const { getAllMembers, createMember } = require('./member.controller');

const memberRouter = require('express').Router();

memberRouter.use(protect);

memberRouter.route('/').get(getAllMembers).post(createMember);
