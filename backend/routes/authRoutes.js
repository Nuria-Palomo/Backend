import express from 'express'
import {login, createUser} from '../controller/authController.js'
import rateLimit from 'express-rate-limit'

const userRouter = express.Router()

userRouter.post('/',createUser)
userRouter.post('/login', rateLimit, login)


export default userRouter