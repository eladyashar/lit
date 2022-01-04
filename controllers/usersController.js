
 const User = require('../models/user');
exports.usersController = {
  
    getUserById(req, res) {
        User.findById(req.params.id)
            .then((result) => {
                if (result) {
                    res.json(result);
                }
            })
            .catch((err) => {
                res.status(404).json({ message: `Can't find user by id!` });
            })
    },
    getUsers(req, res) {
        User.find()
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.status(404).send(`Can't find user!`);
            })
    }
};






