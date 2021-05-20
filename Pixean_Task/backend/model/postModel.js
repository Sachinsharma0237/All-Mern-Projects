const { mongoose } = require("../model/db");

let postSchema = mongoose.Schema({
    photo:{
        type: String,
        required: true,
    }
})

const postModel = mongoose.model('user', postSchema);
module.exports = postModel;