const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/', (request, response) => response.send('teste'));
routes.get('/product', ProductController.index);
routes.post("/product", ProductController.store);


module.exports = routes;