var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('../concertcalendar', function (req, res) {
  res.send('concertcalendar home page')
})
// define the about route
router.get('../concertcalendar/about', function (req, res) {
  res.send('About concertcalendar')
})

module.exports = router;