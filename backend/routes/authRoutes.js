import {Router} from 'express'
import {login, registrer} from '../controller/authController.js'

const router = Router()

router.post('/registrer', registrer)
router.post('/login', login)

export default router