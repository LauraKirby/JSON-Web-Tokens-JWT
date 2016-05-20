var mongoose = require("mongoose");

var options = {
  user: process.env.MONGOLAB_USERNAME,
  pass: process.env.MONGOLAB_PASSWORD
};

mongoose.connect(process.env.MONGOLAB_URI, options, function(error){
  if (error) console.error(error);
  else console.log('mongo connected', process.env.MONGOLAB_URI);
});

mongoose.set("debug", true);

module.exports.User = require("./user");