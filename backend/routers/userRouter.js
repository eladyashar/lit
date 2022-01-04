const { Router } = require('express');
const { customersController } = require('../controllers/customersController');
const customersRouter = new Router();
module.exports = { customersRouter };

customersRouter.get('/score/:id' ,customersController.getCustomers); 
// customersRouter.post('/' ,customersController.addCustomer); 
// customersRouter.get('/:id', customersController.getCustomerById);

  
