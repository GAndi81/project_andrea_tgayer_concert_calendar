module.exports = (app) => {
    const bakelits = require('../controllers/bakelit.controller.js');

    // Create a new Concert
    app.post('/bakelits', bakelits.create);

    // Retrieve all Concerts
    app.get('/bakelits', bakelits.findAll);

    // Retrieve a single Concert with concertId
    app.get('/bakelits/:bakelitId', bakelits.findOne);

    // Update a Concert with concertId
    app.put('/bakelits/:bakelitId', bakelits.update);

    // Delete a Concert with concertId
    app.delete('/bakelits/:bakelitId', bakelits.delete);
};