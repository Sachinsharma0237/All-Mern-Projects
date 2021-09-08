const { mongoose } = require("../config/database");

const user = new mongoose.Schema({
      username: {type: String, require: true, unique: true, index: true},
      password: String
});

var userModel = mongoose.model("User", user);
module.exports = userModel;