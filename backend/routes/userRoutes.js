import express from "express";
import { createUser, deleteUser, updateUser, getUsers, getUserId } from "../controller/userCotroller.js";
import { roleVerification } from "../libs/initialSetup.js";
import { tokenVerification } from "../middlewares/middlewares.js";

const userRouter = express.Router()

userRouter.get('/',tokenVerification, getUsers)
userRouter.get('/:id', tokenVerification, getUserId)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default  userRouter