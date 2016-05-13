var express = require ('express');
var basicRoutes = express.Router();
var User = require('../models/user');

// landing page route
basicRoutes.get("/", function (req, res) {
  res.send("Hello Insect World");
});

// "about" route
basicRoutes.get("/about", function(req, res) {
  res.send("About insects");
});

// create and save sample user
basicRoutes.get('/setup', function(req, res) {
  var nick = new User({
    name: 'Nick Cerminara',
    password: 'password',
    admin: true
  });

  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

module.exports = basicRoutes;