const { mongoose } = require("../config/database");


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true
    },
    username: String,
    password: {
        type: String,
        required: true
    },
    confirmPassword: String
})

let userModel = mongoose.model('userCollection', userSchema);
module.exports = userModel;