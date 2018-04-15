var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route
router.get('../users', function (req, res) {
    res.send('users home page')
})
// define the about route
router.get('../users/about', function (req, res) {
    res.send('about users')
})

module.exports = router;