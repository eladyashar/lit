
// const Customer = require('../models/customer');
// exports.customersController = {
  
//     getCustomerById(req, res) {
//         Customer.findById(req.params.id)
//             .then((result) => {
//                 if (result) {
//                     res.json(result);
//                 }
//             })
//             .catch((err) => {
//                 res.status(404).json({ message: `Can't find customer by id!` });
//             })
//     },
//     getCustomers(req, res) {
//         Customer.find()
//             .then((result) => {
//                 res.json(result);
//             })
//             .catch((err) => {
//                 res.status(404).send(`Can't find Customers!`);
//             })
//     },
//     addCustomer(req, res) {
//         Customer.create(req.body)
//             .then((newCustomer) => {
//                 res.json(newCustomer);
//             })
//             .catch((err) => {
//                 res.status(404).send(`Can't add customer!`);
//             })
//     }
// };






