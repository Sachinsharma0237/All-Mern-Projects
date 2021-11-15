const express = require('express');
const app = express();
const multer = require('multer');


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


function imageFilter(req, file, cb){
    if(file.mimetype.includes('image')){
        cb(null, true);
    }else{
        cb(null, false);
    }
}


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(file.fieldname == 'user'){
            cb(null, 'public/img/users')
        }else if(file.fieldname == 'plan'){
            cb(null, 'public/img/plans');
        }else{
            return;
        }    
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + ".jpg")
    }
})

const upload = multer({storage: storage, imageFilter:imageFilter});


app.post("/uploadPhoto", upload.single('user') ,function(req, res){
    console.log(req.file);
})

app.post("/uploadPlans", upload.single('plan') ,function(req, res){
    console.log(req.file);
})


app.listen("3000", (req, res)=>{
    console.log("server listening at port 3000");
})