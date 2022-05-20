// create hostel's ad model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostelsAdModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
            maxlength: [50, 'Title can not be more than 50 characters'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
            maxlength: [500, 'Description can not be more than 500 characters'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        hostel: {
            type: Schema.Types.ObjectId,
            ref: 'Hostel',
            required: [true, 'Please add a hostel'],
        },
        phone: {
            type: String,
            required: [true, 'Please add a phone number'],
        },
        email: {
            type: String,
        },
        photo: String,
        numberOfValency: {
            type: Number,
            required: [true, 'Please add a number of valency'],
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

module.exports = mongoose.model('HostelsAd', hostelsAdModel);
