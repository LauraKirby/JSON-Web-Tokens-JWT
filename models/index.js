var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || process.env.DATABASE);

mongoose.set("debug", true);

module.exports.User = require("./user");
//