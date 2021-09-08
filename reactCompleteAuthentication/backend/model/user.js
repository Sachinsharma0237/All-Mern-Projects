const { mongoose } = require("../config/database");

const user = new mongoose.Schema({
      email : { type: String, unique:true,sparse:true},
      password: { type: String, require:true },
      fullName: {
            type: String,
            require: true,
      },
      dob: {
            type: String,
            // require: true,
      },
      gender: {
            type: String,
            require: true,
      },
      occupation: {
            type: String,
      },
      state: {
            type: String,
      },
      city: {
            type: String,
      }    

});

var userModel = mongoose.model("User", user);
module.exports = userModel;