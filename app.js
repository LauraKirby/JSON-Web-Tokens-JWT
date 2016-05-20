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

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('superSecret', process.env.SECRET);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', basicRoutes);
app.use('/api', apiRoutes);

app.use(morgan('dev')); // log requests to the console

app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});