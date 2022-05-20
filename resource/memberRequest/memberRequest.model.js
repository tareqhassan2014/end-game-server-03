const mongoose = require('mongoose');

const memberRequestModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
        },
        hostelsAd: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'HostelsAd',
            required: [true, 'hostelsAd is required'],
        },
        hostel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hostel',
            required: [true, 'Hostel is required'],
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                // ret.id = ret._id;
                delete ret.id;
                delete ret.__v;
                // delete ret.createAt;
                delete ret.updatedAt;
                return ret;
            },
        },
        toObject: {
            virtuals: true,
            transform: (doc, ret) => {
                // ret.id = ret._id;
                delete ret.id;
                delete ret.__v;
                // delete ret.createAt;
                delete ret.updatedAt;
                return ret;
            },
        },
    }
);

// set complex index
memberRequestModel.index({ user: 1, hostelsAd: 1 }, { unique: true });

module.exports = mongoose.model('MemberRequest', memberRequestModel);
