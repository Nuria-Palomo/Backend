import express from "express";
import { createForm, deleteForm, updateForm, getForms, getFormid } from "../controller/FormController.js";
import { roleVerification } from "../libs/initialSetup.js";
import { tokenVerification } from "../middlewares/middlewares.js";
import { verifyAdminRole } from "../middlewares/middlewares.js";

const LoginRouter = express.Router()


LoginRouter.get('/',tokenVerification, getForms)
LoginRouter.get('/:id', tokenVerification, getFormid)
LoginRouter.post('/', tokenVerification, createForm)
LoginRouter.put('/:id', verifyAdminRole, updateForm)
LoginRouter.delete('/:id', verifyAdminRole, deleteForm)

export default  LoginRouter