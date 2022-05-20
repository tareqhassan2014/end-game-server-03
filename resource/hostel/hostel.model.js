const mongoose = require('mongoose');
const userModel = require('../user/user.model');
const Schema = mongoose.Schema;

const hostelSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            maxlength: [50, 'Name can not be more than 50 characters'],
            trim: true,
        },
        address: {
            type: String,
            required: [true, 'Please add an address'],
            maxlength: [50, 'Address can not be more than 50 characters'],
            trim: true,
        },
        city: {
            type: String,
            required: [true, 'Please add a city'],
            maxlength: [50, 'City can not be more than 50 characters'],
            trim: true,
        },
        totalSit: {
            type: Number,
            required: [true, 'Please add a total sit'],
        },
        banner: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        members: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        estimation: {
            type: String,
            enum: ['monthly', 'fortnightly'],
            default: 'monthly',
        },
        status: {
            type: String,
            enum: ['open', 'close'],
            default: 'open',
        },
        phone: {
            type: String,
            required: [true, 'Please add a phone number'],
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Please add an email'],
        },
        rating: {
            type: Number,
            default: 4.5,
        },
        admin: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },
        website: String,
        page: String,
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

hostelSchema.statics.upgradeToAdmin = async function (userId) {
    await userModel.findByIdAndUpdate(userId, {
        role: 'admin',
    });
};

hostelSchema.pre('save', function () {
    // this points to current hostel
    this.constructor.upgradeToAdmin(this.admin);
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
