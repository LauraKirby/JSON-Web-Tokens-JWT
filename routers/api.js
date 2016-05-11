var express = require ('express');
var router = express.Router();

// define the landing page route
router.get("/", function (req, res) {
  res.send("Hello Insect World");
});

// define the "about" route
router.get("/about", function(req, res) {
  res.send("About insects");
});

module.exports = router;