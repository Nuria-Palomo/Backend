import express from "express";
import { createForm, deleteForm, updateForm, getForms, getFormid } from "../controller/FormController.js";
import { roleVerification } from "../libs/initialSetup.js";
import { tokenVerification } from "../middlewares/middlewares.js";
import { verifyAdminRole } from "../middlewares/middlewares.js";

const RegisterRouter = express.Router()


RegisterRouter.get('/',tokenVerification, getForms)
RegisterRouter.get('/:id', tokenVerification, getFormid)
RegisterRouter.post('/', tokenVerification, createForm)
RegisterRouter.put('/:id', verifyAdminRole, updateForm)
RegisterRouter.delete('/:id', verifyAdminRole, deleteForm)

export default  RegisterRouter