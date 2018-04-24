module.exports = (app) => {
    const users = require('../controllers/user.controller.js');


    // Login users
    app.post('/login', users.login);

    // Register users
    app.post('/registration', users.registration);

    // *********** standard users api ****************** //

    // Get all users
    app.get('/users', users.findAll);

    //Get a user by ID
    app.get('/users/:userId', users.findOne);

    // Update a user by ID
    app.put('/users/:userId', users.update);

    // Delete a user by ID
    app.delete('/users/:userId', users.delete);
};