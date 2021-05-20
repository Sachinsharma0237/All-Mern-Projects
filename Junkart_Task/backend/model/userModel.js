const { mongoose } = require("./db")


const userSchema =  mongoose.Schema({

    name:{
        type: String,
      //  required: true
    },
    email:{
        type: String,
     //   required: true,
     //   unique: true
    },
    age:{
        type: String,
    //    required: true
    },
    cheeks:{
        type: String,
      //  required: true
    },
    tZone:{
        type: String,
      //  required: true
    },
    skinConcerns:{
        type: String,
        //required: true
    },
    allergic:{
        type: String,
     //   required: true
    },
    randomIssues:{
        type: String,
     //   required: true
    }

})


const userModel = mongoose.model("user", userSchema);

module.exports.userModel = userModel;



// {
//     "name":"Tony Stark",
//     "email":"tonystark@gmail.com",
//     "age":"20-30",
//     "cheeks":"Normal",
//     "tZone":"Dry",
//     "skinConcerns":"Acne",
//     "allergic":"vitamin-c",
//     "randomIssues":"Lack of Sleep"
// }