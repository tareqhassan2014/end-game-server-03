// create product model

const mongoose = require('mongoose');

const productModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minlength: [3, 'Title must be at least 3 characters'],
            maxlength: [50, 'Title must be at most 50 characters'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minlength: [3, 'Description must be at least 3 characters'],
            maxlength: [500, 'Description must be at most 500 characters'],
            trim: true,
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            minlength: [3, 'Category must be at least 3 characters'],
            maxlength: [50, 'Category must be at most 50 characters'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
        },
        photo: String,
        phone: {
            type: String,
            required: [true, 'Phone is required'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
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

module.exports = mongoose.model('Product', productModel);
