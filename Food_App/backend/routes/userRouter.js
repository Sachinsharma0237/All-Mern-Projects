const express = require("express");
const { login, signup, protectRoute, forgotPassword, resetPassword } = require("../controller/authController");
const { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } = require("../controller/userController");
const userRouter = express.Router();

// userRouter.route("")
// .get(getAllUsers)
// .post(createUser);

userRouter.route("")
.get(protectRoute, getUserById)
.patch(protectRoute, updateUserById)
.delete(protectRoute, deleteUserById);

userRouter.post("/login", login)
userRouter.post("/signup", signup)
userRouter.post("/forgot", forgotPassword)
userRouter.patch("/resetPassword/:token", resetPassword)



module.exports = userRouter;