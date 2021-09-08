const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const bcryptSalt = process.env.BCRYPT_SALT;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
      },
        password: { type: String },
      },
      {
        timestamps: true,
      }
)


const userModel = mongoose.model('userCollection', userSchema);
module.exports = userModel;