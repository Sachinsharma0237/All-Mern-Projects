const multer = require("multer");
const path = require("path");
const { createPost, getAllPost } = require("../controller/postController");
const postRouter = require("express").Router();

//---------------------------IMAGE UPLOADING USING MULTER---------------------------------------------------------

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename : function (req,  file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
// const fileFilter = function (req, file, cb) {
//     if( file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
//         cb(null, true);
//     }else{
//         cb(null, false);
//     }
// }
const upload = multer({storage:storage});

//---------------------------IMAGE UPLOADING USING MULTER---------------------------------------------------------


postRouter.route("").post( upload.single('post'), createPost );
postRouter.route("").get(getAllPost);

module.exports = postRouter;