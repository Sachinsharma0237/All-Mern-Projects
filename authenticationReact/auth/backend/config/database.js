const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const options = {
    useMongoClient: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}

mongoose.connect( `${process.env.MONGODB_URL_LOCAL}`, options).then( obj =>{
    console.log("MongoDB Connected Successfully");
})


module.exports.mongoose = mongoose;
