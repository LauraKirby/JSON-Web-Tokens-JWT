var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstName: String,
  username: String,
  password: String
});

var User = mongoose.model("User", userSchema);
module.exports = User;