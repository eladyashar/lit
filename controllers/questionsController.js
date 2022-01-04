
 const Question = require('../models/question');
 exports.questionsController = {
     getQuestions(req, res) {
        Question.find()
             .then((result) => {
                 res.json(result);
             })
             .catch((err) => {
                 res.status(404).send(`Can't find question!`);
             })
     }
 };
 
 
 
 
 
 
 