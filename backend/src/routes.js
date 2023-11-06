import express from 'express'
import { index, store, remove, update } from './controllers/ProductController.js';
import { validateId } from './middlewares/ProductMiddleware.js'
import { indexing, storing, updating, removing } from './controllers/AccountController.js';
import { validatingId } from './middlewares/AccountMiddleware.js';
import { authMiddleware } from './middlewares/AuthMiddleware.js';
import SessionsController from './controllers/SessionsController.js';

const routes = express.Router();

// Products ***

routes.get('/product', index);

routes.post("/product", store);

routes.put('/product/:id', validateId, update)

routes.delete('/product/:id', validateId, remove)

// AuthMiddleware - Session Controler ***

routes.post('/sessions', SessionsController.create)

routes.use('/account', authMiddleware)

// Accounts ***

routes.get('/accounts', indexing);

routes.post('/accounts', storing)

routes.put('/account/:id', validatingId, updating)

routes.delete('/account/:id', validatingId, removing)


export default routes;