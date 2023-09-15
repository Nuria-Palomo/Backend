import express from 'express'
import {login, createUser} from '../controller/authController.js'

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.post('/login', login)


export default userRouter