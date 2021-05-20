const { getAllUsers, getUserById, createUser, updateUserById } = require("../controller/userController");

const userRouter = require("express").Router();


userRouter.route("")
.get(getAllUsers)
.post(createUser);



userRouter.route("/:id")
.get(getUserById)
.patch(updateUserById);


module.exports.userRouter = userRouter;