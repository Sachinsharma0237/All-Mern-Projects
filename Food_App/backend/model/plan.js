const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
    name:{
        required: true,
        type: String,
        maxlength: [40, "You character name limit is exceeded"],
        unique: true
    },
    duration:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        default: 0,
    },
    discount:{
        type: Number,
        default: 0,
        validate:{
            validator: function(){
                return this.discount < this.price
            },
            message: "discount not applicable"
        }
    }
    }, 
    {
     timestamps: true
    })

const planModel = mongoose.model('plansCollection', planSchema);
module.exports = planModel;

