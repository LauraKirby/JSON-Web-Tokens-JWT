var express = require ('express');
var basicRoutes = express.Router();
var db = require("../models");
var mongoose = require ('mongoose');

basicRoutes.get("/", function (req, res) {
  res.render("landing");
});

basicRoutes.get("/about", function(req, res) {
  res.send("About insects");
});

// create and save sample user
basicRoutes.get('/setup', function(req, res) {
  var newUser = {
    username: 'Nick Cerminara',
    password: 'password',
    admin: true
  };

  db.User.create(newUser, function(err, savedUser){
    if (err) {
      console.log(err);
    } else if (savedUser){
      console.log("user has been saved");
      res.json({ success: true });
    }
    else {
      console.log("something else happend");
    }
  });
});

module.exports = basicRoutes;