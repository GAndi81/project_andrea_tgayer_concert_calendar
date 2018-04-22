const Bakelit = require('../models/bakelit.model.js');

// Create and Save a new bakelit
exports.create = (req, res) => {
    //Validate request
    if (!req.body.artist) {
        return res.status(400).send({
            message: "Artist cannot be empty"
        })
    }
    // Create a bakelit
    const bakelit = new Bakelit({
        artist: req.body.artist || "Untitled Artist",
        title: req.body.title,
        image: req.body.image
    });

    // Save bakelit in the database
    bakelit.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating the bakelit."
            });
        });
};


// Retrieve and return all bakelits from the database.
exports.findAll = (req, res) => {
    Bakelit.find()
        .then(bakelits => {
            res.send(bakelits);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bakelits."
            });
        });
};

// Find a single bakelit with a bakelitId
exports.findOne = (req, res) => {
    Bakelit.findById(req.params.bakelitId)
        .then(bakelit => {
            if (!bakelit) {
                return res.status(404).send({
                    message: "Bakelit not found with id " + req.params.bakelitId
                });
            }
            res.send(bakelit);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Bakelit not found with id " + req.params.bakelitId
                });
            }
            return res.status(500).send({
                message: "Error retrieving bakelit with id " + req.params.bakelitId
            });
        });
};

// Update a bakelit identified by the bakelitId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.artist) {
        return res.status(400).send({
            message: "Bakelit artist cannot be empty"
        });
    }

    // Find bakelit and update it with the request body
    Bakelit.findByIdAndUpdate(req.params.bakelitId, {
            artist: req.body.artist || "Untitled Artist",
            title: req.body.title,
            image: req.body.image
        }, {
            new: true
            //The {new: true} option in the findByIdAndUpdate() method is used to return the modified document to the then() function instead of the original.
        })
        .then(bakelit => {
            if (!bakelit) {
                return res.status(404).send({
                    message: "Bakelit not found with id " + req.params.bakelitId
                });
            }
            res.send(bakelit);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Bakelit not found with id " + req.params.bakelitId
                });
            }
            return res.status(500).send({
                message: "Error updating bakelit with id " + req.params.bakelitId
            });
        });
};

// Delete a bakelit with the specified bakelitId in the request
exports.delete = (req, res) => {
    Bakelit.findByIdAndRemove(req.params.bakelitId)
        .then(bakelit => {
            if (!bakelit) {
                return res.status(404).send({
                    message: "Bakelit not found with id " + req.params.bakelitId
                });
            }
            res.send({
                message: "Bakelit deleted successfully!"
            });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Bakelit not found with id " + req.params.bakelitId
                });
            }
            return res.status(500).send({
                message: "Could not delete bakelit with id " + req.params.bakelitId
            });
        });
};