const mongoose = require("mongoose");

const {DB_CONFIG} = require("../config/secrets");

mongoose.connect( DB_CONFIG, {useNewUrlParser: true, useUnifiedTopology: true}).then( (obj)=>{
        console.log("Database Connected Successfully");
})

module.exports.mongoose = mongoose;