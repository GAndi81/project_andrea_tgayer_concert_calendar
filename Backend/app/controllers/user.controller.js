const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    //Validate request
    if (!req.body.email) {
        return res.status(400).send({
            message: "User email cannot be empty"
        })
    }
    // Create a User
    const user = new User({
        email: req.body.email || "Untitled Email",
        password: req.body.password

    });
    // Save User in the database
    user.save()
        .then(data => {
            console.log('New user saved:' + JSON.stringify(data));
            res.send({
                email: data.email
            });
        }).catch(err => {
            console.log(err.message);
            res.status(500).send({
                message: "An error occurred while creating the user."
            });
        });
};

// user login - 
exports.login = (req, res) => {
    User.findByEmail(req.params.userEmail, req.params.userPassword)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found by email " + req.params.userEmail
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found by email " + req.params.userEmail
                });
            }
            return res.status(500).send({
                message: "Error occurred " + req.params.userEmail
            });
        });
};

// find an existing user in the database
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.userId
            });
        });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
            email: req.body.email || "Untitled User",
            password: req.body.password
        }, {
            new: true
            //The {new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.userId
            });
        });
};

// Find all users from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send({
                message: "User deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.userId
            });
        });

};