var express = require ('express');
var router = express.Router();
var User = require('../models/user');

// define the landing page route
router.get("/", function (req, res) {
  res.send("Hello Insect World");
});

// define the "about" route
router.get("/about", function(req, res) {
  res.send("About insects");
});

router.get('/setup', function(req, res) {
  // create a sample user
  var nick = new User({
    name: 'Nick Cerminara',
    password: 'password',
    admin: true
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

module.exports = router;