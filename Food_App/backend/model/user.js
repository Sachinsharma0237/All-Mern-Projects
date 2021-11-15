const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;
const crypto = require('crypto');

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
      confirmPassword: { 
            type: String, 
            require:true,
            minlength:[6, "Password must be greater than 6 Characters"],
            validate: {
                  validator: function(){
                        return this.password == this.confirmPassword;
                  },
                  message:"Password didn't matched!"
            }
      },
      role:{
         type: String,
         enum: ["admin", "user", "restaurants owner", "delivery boy"],
         default: "user"
      },
      pwToken: String,
      tokenTime: String,
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
      },
      pImage: {
            type: String,
            default:"/img/user/default.jpg"
      }
      },
      {
        timestamps: true,
      }
)

userSchema.pre("save", function(){
      this.confirmPassword = undefined;
})



//forgot password 
userSchema.methods.createPwToken = function(){
      //token banao and token time banado and set in current document
      let token = crypto.randomBytes(32).toString("hex");
      let time = Date.now() * 60 * 10 * 1000;

      this.pwToken = token;
      this.tokenTime = time;

      return token;
}

//resetPassword
userSchema.methods.resetPasswordHandler = function(password, confirmPassword){
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.pwToken = undefined;
      this.tokenTime = undefined;
}



const userModel = mongoose.model('userCollection', userSchema);
module.exports = userModel;