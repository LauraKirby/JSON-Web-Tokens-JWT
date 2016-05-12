var mongoose = require ('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var expressJWT = require('express-JWT');
var jwt = require('jsonwebtoken');
var apiRoutes = require('./routers/api');
var db = require("./models");

var app = express();

app.use('/', apiRoutes);


// use the `listen` method, provided by Express.js, to start the server
app.listen(process.env.PORT || 3000, function () {
  console.log("Starting a server on localhost:3000");
});