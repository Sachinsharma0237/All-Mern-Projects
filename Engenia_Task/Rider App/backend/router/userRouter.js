const multer = require("multer");
const path = require("path");
const { getAllUsers, getUserById, deleteUserById, createUser, updateUserById } = require('../controller/userController');
const userRouter = require('express').Router();


//---------------------------------------------------Multer----------------------------------------------------------------------------------
const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename : function (req,  file, cb) {
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
//---------------------------------------------------Multer----------------------------------------------------------------------------------



userRouter.route("")
.get(getAllUsers)
.post(upload.single('user'), createUser);



userRouter.route("/:id")
.get(getUserById)
.delete(deleteUserById)
.post(upload.single('user'), updateUserById);



module.exports = userRouter;