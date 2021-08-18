const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
     
})

const userModel = mongoose.model('userCollection', userSchema);
module.exports = userModel;