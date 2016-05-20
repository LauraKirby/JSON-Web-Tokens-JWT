var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || process.env.DATABASE, function(error){
  if (error) console.error(error);
  else console.log('mongo connected');
});

mongoose.set("debug", true);

module.exports.User = require("./user");