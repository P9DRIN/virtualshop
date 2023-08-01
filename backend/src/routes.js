const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
const ProductMiddleware = require('./middlewares/ProductMiddleware');

routes.get('/', (request, response) => response.send('teste'));

routes.get('/product', ProductController.index);

routes.post("/product", ProductController.store);

routes.put('/product/:id', ProductMiddleware.validateId, ProductController.update)

routes.delete('/product/:id', ProductMiddleware.validateId, ProductController.delete)

module.exports = routes;