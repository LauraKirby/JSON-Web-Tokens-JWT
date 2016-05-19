var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var basicRoutes = require('./routers/basic');
var apiRoutes = require('./routers/api');

var config = require('./config');
var User = require('./models/user');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable


app.use('/', basicRoutes);
app.use('/api', apiRoutes);

// use morgan to log requests to the console
app.use(morgan('dev'));


// use the `listen` method, provided by Express.js, to start the server
app.listen(process.env.PORT || 3000, function () {
  console.log("Starting a server on localhost:3000");
});