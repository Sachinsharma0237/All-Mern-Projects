const express = require("express");
const { login, signup, protectRoute, resetPassword, forgotPassword } = require("../controller/authController");
const { getAllUsers, createUser, getUserById, updateUserById, deleteUserById, updateProfilePhoto } = require("../controller/userController");
const userRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, 'public/img/user')
    },
    filename: function(req, file, cb){
        cb(null, `user${Date.now()}.jpg`);
    }
})
function fileFilter(req, file, cb){
    if(file.mimetype.includes('image')){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
const upload = multer({storage:storage, fileFilter:fileFilter});

// userRouter.route("")
// .get(getAllUsers)
// .post(createUser);

// userRouter.use(protectRoute)

userRouter.route("")
.get(protectRoute, getUserById)
.patch(protectRoute, updateUserById)
.delete(protectRoute, deleteUserById);

userRouter.post("/login", login)
userRouter.post("/signup", signup)
userRouter.post("/forgetpassword", forgotPassword)
userRouter.patch("/resetPassword/:token", resetPassword)
userRouter.patch("/updateProfilePhoto", upload.single("user") ,updateProfilePhoto);


module.exports = userRouter;