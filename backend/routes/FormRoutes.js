import express from "express";
import { createForm, deleteform, updateForm, getForms, getFormid } from "../controller/FormController.js";
import { roleVerification } from "../libs/initialSetup.js";
import { tokenVerification } from "../middlewares/middlewares.js";

const FormRouter = express.Router()

FormRouter.get('/',tokenVerification, getForms)
FormRouter.get('/:id', tokenVerification, getFormid)
FormRouter.post('/', createForm)
FormRouter.put('/:id', updateForm)
FormRouter.delete('/:id', deleteform)

export default  FormRouter