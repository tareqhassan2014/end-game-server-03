// crate grocery schema
const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema(
    {
        store: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            required: [true, 'Please add a store'],
        },
        vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please add a vendor'],
        },
        title: {
            type: String,
            required: [true, 'Please add a title'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Please add a price'],
        },
        photo: {
            type: String,
            default: 'no-image.jpg',
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

// populate the store and vendor
grocerySchema.pre(/^find/, function (next) {
    this.populate({
        path: 'store',
        select: 'name address phone thumbnail',
    }).populate({
        path: 'vendor',
        select: 'name photo email',
    });

    next();
});

module.exports = mongoose.model('Grocery', grocerySchema);
