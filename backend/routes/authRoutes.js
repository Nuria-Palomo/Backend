import express from 'express'
import {login, createUser} from '../controller/authController.js'
import { limiter } from '../middlewares/middlewares.js' 


const userRouter = express.Router()

userRouter.post('/',createUser)
userRouter.post('/login', limiter, login)


export default userRouter