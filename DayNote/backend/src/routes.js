const express = require('express');

//instanciao obj routes
const routes = express.Router();

//puxa os dados de AnnotationController
const AnnotaionController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

// ira pegar o comando create na pag AnnotationController e quando o caminho da página for /annotations ele executa o create / Rota AnnotationController
routes.post('/annotations', AnnotaionController.create);
routes.get('/annotations', AnnotaionController.read);
routes.delete('/annotations/:id', AnnotaionController.delete);

//rota prioridade
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//rota content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;