const { protect, restrict } = require('../user/auth.controller');
const {
    createMemberRequest,
    getAllMemberRequest,
    setUserData,
} = require('./memberRequest.controller');

const memberRequestRouter = require('express').Router();

memberRequestRouter.use(protect);

memberRequestRouter
    .route('/')
    .get(getAllMemberRequest)
    .post(restrict('user'), setUserData, createMemberRequest);

module.exports = memberRequestRouter;
