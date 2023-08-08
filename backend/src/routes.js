const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
const ProductMiddleware = require('./middlewares/ProductMiddleware');
const AccountController = require('./controllers/AccountController');
const AccountMiddleware = require('./middlewares/AccountMiddleware');

// Products ***

routes.get('/', (request, response) => response.send('teste'));

routes.get('/product', ProductController.index);

routes.post("/product", ProductController.store);

routes.put('/product/:id', ProductMiddleware.validateId, ProductController.update)

routes.delete('/product/:id', ProductMiddleware.validateId, ProductController.delete)

// Accounts ***

routes.get('/accounts', AccountController.index);

routes.post("/accounts", AccountController.store);

routes.put('/accounts/:id', AccountMiddleware.validateId, AccountController.update)

routes.delete('/accounts/:id', AccountMiddleware.validateId, AccountController.delete)


module.exports = routes;