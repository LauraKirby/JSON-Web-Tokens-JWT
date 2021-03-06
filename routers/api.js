var dotenv = require("dotenv").load();
var express = require('express');
var db = require("../models");
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var apiRoutes = express.Router();

var app = express();
app.set('superSecret', process.env.SECRET);  // secret variable

// route to authenticate a user (POST http://localhost:3000/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {

  // find the user
  db.User.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 18000 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

    }

  });
});

// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token']; // check header or url parameters or post parameters for token
  if (token) { // decode token
    jwt.verify(token, app.get('superSecret'), function(err, decoded) { // verifies secret and checks exp
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded; // if everything is good, save to request for use in other routes
        next();
      }
    });
  } else {
    // if no token, return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});

apiRoutes.get('/', function(req, res) {
  res.render('landing');
});

// route to return all users (GET http://localhost:3000/api/users)
apiRoutes.get('/users', function(req, res) {
  db.User.find({}, function(err, users) {
    res.json(users);
  });
});

apiRoutes.get('/users/:user_id/search', function(req, res){
  var category = req.query.category;

});

apiRoutes.get('/logout', function(req, res){

});

module.exports = apiRoutes;