const Concert = require('../models/concert.model.js');

// Create and Save a new Concert
exports.create = (req, res) => {
    //Validate request
    if (!req.body.artist) {
        return res.status(400).send({
            message: "Artist cannot be empty"
        })
    }
    // Create a Concert
    const concert = new Concert({
        artist: req.body.artist || "Untitled Artist",
        date: req.body.date,
        venue: req.body.venue
    });

    // Save Concert in the database
    concert.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Concert."
            });
        });
};




// Retrieve and return all concerts from the database.
exports.findAll = (req, res) => {
    Concert.find()
        .then(concerts => {
            res.send(concerts);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving concerts."
            });
        });
};

// Find a single concert with a userId
exports.findOne = (req, res) => {
    Concert.findById(req.params.concertId)
        .then(concert => {
            if (!concert) {
                return res.status(404).send({
                    message: "Concert not found with id " + req.params.concertId
                });
            }
            res.send(concert);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Concert not found with id " + req.params.concertId
                });
            }
            return res.status(500).send({
                message: "Error retrieving concert with id " + req.params.concertId
            });
        });
};

// Update a concert identified by the concertId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.artist) {
        return res.status(400).send({
            message: "Concert artist cannot be empty"
        });
    }

    // Find concert and update it with the request body
    Concert.findByIdAndUpdate(req.params.concertId, {
            artist: req.body.artist || "Untitled Artist",
            date: req.body.date,
            venue: req.body.venue
        }, {
            new: true
            //The {new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
        })
        .then(concert => {
            if (!concert) {
                return res.status(404).send({
                    message: "Concert not found with id " + req.params.concertId
                });
            }
            res.send(concert);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Concert not found with id " + req.params.concertId
                });
            }
            return res.status(500).send({
                message: "Error updating concert with id " + req.params.concertId
            });
        });
};

// Delete a concert with the specified concertId in the request
exports.delete = (req, res) => {
    Concert.findByIdAndRemove(req.params.concertId)
        .then(concert => {
            if (!concert) {
                return res.status(404).send({
                    message: "Concert not found with id " + req.params.concertId
                });
            }
            res.send({
                message: "Concert deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Concert not found with id " + req.params.concertId
                });
            }
            return res.status(500).send({
                message: "Could not delete concert with id " + req.params.concertId
            });
        });
};