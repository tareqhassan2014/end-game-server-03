const storeRouter = require('express').Router();

storeRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API',
    });
});

module.exports = storeRouter;