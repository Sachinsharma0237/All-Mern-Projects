const express = require("express");
const multer = require("multer");
const path = require("path");  //extension nikalne k kaam atta hai
const app = express();

app.use( express.static("public") );

app.use( express.json() );

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename : function (req,  file, cb) {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = function (req, file, cb) {
    if( file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}



const upload = multer({storage:storage, fileFilter:fileFilter});


app.post("/imageUpload",upload.single('photo'), function(req, res) {
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);
    try{
        res.json({
            message:"Photo upload succesfully"
        })
    }
    catch (error) {
        res.json({
            message:"failed to upload image"
        })
    }
});


let port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`server started at ${port}`);
})
