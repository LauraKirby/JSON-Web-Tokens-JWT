var mongoose = require ('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var expressJWT = require('express-JWT');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var apiRoutes = require('./routers/api');
var config = require('./config');

var app = express();

app.use('/', apiRoutes);

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use the `listen` method, provided by Express.js, to start the server
app.listen(process.env.PORT || 3000, function () {
  console.log("Starting a server on localhost:3000");
});