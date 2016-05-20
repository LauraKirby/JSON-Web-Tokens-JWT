var dotenv = require("dotenv").load();
var db = require("./models");
var bodyParser = require('body-parser');
var express = require('express');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var basicRoutes = require('./routers/basic');
var apiRoutes = require('./routers/api');

var app = express();

app.set('superSecret', process.env.SECRET); // secret variable
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log requests to the console

app.use('/', basicRoutes);
app.use('/api', apiRoutes);


// use the `listen` method, provided by Express.js, to start the server
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});