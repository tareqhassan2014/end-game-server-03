const mongoose = require('mongoose');

const memberModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
            unique: true,
        },
        hostel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hostel',
            required: [true, 'Hostel is required'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Member', memberModel);
