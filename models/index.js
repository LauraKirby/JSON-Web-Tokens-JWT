var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/insect");

mongoose.set("debug", true);

module.exports.User = require("./user");