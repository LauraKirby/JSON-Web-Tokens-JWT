// use the `require` function, provided by Node.js, to import the Express.js module
var express = require('express'),
  app = express();

// use the `get` method, provided by Express.js, to handle a GET request to "/"
app.get("/", function (req, res) {
  res.send("Hello Insect World");
});

// use the `listen` method, provided by Express.js, to start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});