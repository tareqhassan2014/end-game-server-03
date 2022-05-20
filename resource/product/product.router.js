const { protect } = require('../user/auth.controller');
const {
    getAllProducts,
    getOneProduct,
    createProduct,
    deleteOneProduct,
    setUserData,
} = require('./product.controller');

const productRouter = require('express').Router();

productRouter.route('/').get(getAllProducts);
productRouter.route('/:id').get(getOneProduct);

productRouter.use(protect);
productRouter.use(setUserData);

productRouter.route('/').post(createProduct);
productRouter.route('/:id').delete(deleteOneProduct);


module.exports = productRouter;
