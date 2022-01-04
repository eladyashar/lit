const { Router } = require('express');
const { questionsController } = require('../controllers/questionsController');
const questionsRouter = new Router();
module.exports = { questionsRouter };

questionsRouter.get('/score/:id' ,questionsController.getQuestions); 


  
