import express from 'express';

// Controller Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController'

const routes = express();

// Basic Routes
routes.get('/', basicController.get);


// User Routes
routes.post('/signup', userController.post);

// post routes
routes.get('/post', postController.get);
routes.get('/post/:postId', postController.getOne);
routes.post('/post', postController.post);

export default routes;
