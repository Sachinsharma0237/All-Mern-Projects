const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: true,
}

mongoose.connect( `${process.env.MONGODB_URL_LOCAL}`, options).then( obj =>{
    console.log("MongoDB Connected Successfully");
})


module.exports.mongoose = mongoose;
