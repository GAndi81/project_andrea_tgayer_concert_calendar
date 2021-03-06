const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const createError = require('http-errors');

// create express app
const app = express();

//use helmet
app.use(helmet());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    //if (!req.user) return next(createError(401, 'Please login to view this page.'))
    next()
});

//parse requests of content-type - application/x-www-form-erlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

//parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database.');
        process.exit();
    });



//üzenet a 3500-as portra
app.get('/', (req, res) => {
    res.json({
        "message": "HelloFamily"
    });
});

// Require Users routes
require('./app/routes/user.routes.js')(app);

//Require Concerts routes
require('./app/routes/bakelit.routes.js')(app);


// a szerver figyeli a 3500-as portot
app.listen(3500, () => {
    console.log("Server is listening on port 3500.");
});