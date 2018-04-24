module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/users', users.create);

    // Get all users
    app.get('/users', users.findAll);

    // Login users
    app.get('/users/:userId', users.login);

    //Get a user by ID
    app.get('/users/:userId', users.findOne);

    // Update a user by ID
    app.put('/users/:userId', users.update);

    // Delete a user by ID
    app.delete('/users/:userId', users.delete);
};