const { mongoose } = require("./db");

let userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        default: Date.now()
    },
    endDate:{
        type: Date,
        default: Date.now()
    },
    organizer:{
        type: String,
        required: true
    },
    tickets:{
          type : Array
    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;