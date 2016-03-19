var express = require('express');
var router = express.Router();

var Photo = require('../data/models/Photo');


/* GET photos listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// CREATE ROUTE
router.post('/', function(req, res){
  var newPhoto = req.body

  // create new Photo
  Photo.create(newPhoto, function(err, photo){
    console.log('photo created', err, photo);
    if (err) return res.status(400).send(err);

    res.send(photo);
  })


})

module.exports = router;
