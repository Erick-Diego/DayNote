const express = require('express');
const routes = express.Router();

const AnnotaionController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

routes.post('/annotations', AnnotaionController.create);
routes.get('/annotations', AnnotaionController.read);
routes.delete('/annotations/:id', AnnotaionController.delete);

routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

routes.post('/contents/:id', ContentController.update);

module.exports = routes;
