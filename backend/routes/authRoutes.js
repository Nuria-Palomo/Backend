import {Router} from 'express'
import {login, createUser} from '../controller/authController.js'

const userRouter = Router()

userRouter.post('/', createUser)
userRouter.post('/login', login)


export default userRouter