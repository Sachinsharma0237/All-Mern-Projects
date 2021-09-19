const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;

var validateEmail = function(email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email)
};

const userSchema = new Schema({
      email : { 
            type: String, 
            require: true, 
            index:true, 
            unique:true,
            sparse:true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      password: { 
            type: String, 
            require:true,
            minlength:[6, "Password must be greater than 6 Characters"]
      },
      // confirmPassword: { 
      //       type: String, 
      //       require:true,
      //       minlength:[6, "Password must be greater than 6 Characters"],
      //       validate: {
      //             validator: function(){
      //                   return this.password == this.confirmPassword;
      //             },
      //             message:"Password didn't matched!"
      //       }
      // },
      role:{
         type: String,
         enum: ["admin", "user", "restaurants owner", "delivery boy"],
         default: "user"
      },
      fullName: {
            type: String,
            require: true,
      },
      dob: {
            type: String,
            require: true,
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
      },
      {
        timestamps: true,
      }
)

// userSchema.pre("save", function(){
//       this.confirmPassword = undefined;
// })


const userModel = mongoose.model('userCollection', userSchema);
module.exports = userModel;