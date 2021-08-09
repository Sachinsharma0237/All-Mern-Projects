const express = require("express");
const { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } = require("../controller/userController");
const userRouter = express.Router();

userRouter.route("")
.get(getAllUsers)
.post(createUser);

userRouter.route("/:id")
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById);

module.exports = userRouter;