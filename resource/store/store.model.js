// create store schema

const mongoose = require('mongoose');
const userModel = require('../user/user.model');

const storeModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minlength: [3, 'Name must be at least 3 characters long'],
            maxlength: [30, 'Name must be at most 30 characters long'],
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
            minlength: [3, 'Address must be at least 3 characters long'],
            maxlength: [30, 'Address must be at most 30 characters long'],
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
            minlength: [3, 'Phone must be at least 3 characters long'],
            maxlength: [30, 'Phone must be at most 30 characters long'],
        },
        email: {
            type: String,
        },
        banner: {
            type: String,
            default:
                'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1587010900/store/default_banner_qjqjqj.jpg',
        },
        thumbnail: {
            type: String,
            default:
                'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1587010900/store/default_thumbnail_qjqjqj.jpg',
        },
        description: {
            type: String,
        },
        vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Vendor is required'],
            unique: true,
        },
    },
    { timestamps: true }
);

storeModel.statics.upgradeToVendor = async function (userId) {
    await userModel.findByIdAndUpdate(userId, {
        role: 'vendor',
    });
};

storeModel.pre('save', function () {
    // this points to current hostel
    this.constructor.upgradeToVendor(this.vendor);
});

module.exports = mongoose.model('Store', storeModel);
