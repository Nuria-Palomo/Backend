import express from "express";
import { createForm, deleteForm, updateForm, getForms, getFormid } from "../controller/FormController.js";
import { roleVerification } from "../libs/initialSetup.js";
import { tokenVerification } from "../middlewares/middlewares.js";
import { verifyAdminRole } from "../middlewares/middlewares.js";

const FormRouter = express.Router()


FormRouter.get('/',tokenVerification, getForms)
FormRouter.get('/:id', tokenVerification, getFormid)
FormRouter.post('/',createForm)
FormRouter.put('/:id', verifyAdminRole, updateForm)//solo admin
FormRouter.delete('/:id', verifyAdminRole, deleteForm)//solo admin

export default  FormRouter