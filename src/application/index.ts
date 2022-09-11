import express from 'express';
import { CreateTagControllerFactory } from './factories/CreateTagControllerFactory';
import { CreateUserControllerFactory } from './factories/CreateUserControllerFactory';
import ExpressRoutesAdapter from '../infrastructure/adapters/expressjs/express-routes.adapter';

const app = express();

app.use(express.json())

const createUserController = CreateUserControllerFactory.make();
const createTagController = CreateTagControllerFactory.make();

app.post('/user', (req, res) => createUserController.handle(req, res))
app.post('/tag', ExpressRoutesAdapter.adapt(createTagController))

app.listen(3000, () => console.log('online'));
