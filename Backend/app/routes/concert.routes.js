module.exports = (app) => {
    const concerts = require('../controllers/concert.controller.js');

    // Create a new Concert
    app.post('/concerts', concerts.create);

    // Retrieve all Concerts
    app.get('/concerts', concerts.findAll);

    // Retrieve a single Concert with concertId
    app.get('/concerts/:concertId', concerts.findOne);

    // Update a Concert with concertId
    app.put('/concerts/:concertId', concerts.update);

    // Delete a Concert with concertId
    app.delete('/concerts/:concertId', concerts.delete);
};