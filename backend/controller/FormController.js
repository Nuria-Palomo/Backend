import User from '../model/userModel.js'
import bcrypt from 'bcryptjs'
import hashpassword from '../middlewares/middlewares.js'
import { generateToken } from '../middlewares/middlewares.js'
import Jwt  from 'jsonwebtoken'

export const login = async (req, res) => {

    
    const { name, email, password, role } = req.body
    const user = await User.findOne({ email }) || await User.findOne({ name });

   

    if(!user) {
        return res.status(400).json({message: "Incorrect Email or username"})
    } else {
        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword) {
            return res.status(400).json({ message: "invalid password" })
        } 
        
        
    } 

    console.log(user)
    const token = Jwt.sign({ _id:  user._id, username: user.name, email: user.email, role: user.role}, process.env.SECRET_KEY)
    
    await res.header({
      "auth-token": token,
      
    }).json( token )

}

export const createForm = async (req, res, next) =>{
    try {
        const user = new FormLock(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        next (error)
    }
}

//Trae el formulario con su id

export const getFormid = async (req, res, next) =>{
    try {
        const id = new FormLock(req.body)
        await id.save()
        res.status(201).json(id)
    } catch (error) {
        next (error)
    }
}

//Trae todos los formulario 

export const getForms = async (req, res, next) =>{
    try {
        const forms = new FormLock(req.body)
        await forms.save()
        res.status(201).json(forms)
    } catch (error) {
        next (error)
    }
}

//Actualizar

export const updateForm = async (req, res, next) =>{
    try {
        const id = new FormLock(req.body)
        await id.save()
        res.status(201).json(id)
    } catch (error) {
        next (error)
    }
}

//Eliminar

export const deleteForm = async (req, res, next) =>{
    try {
        const id = new FormLock(req.body)
        await id.save()
        res.status(201).json(id)
    } catch (error) {
        next (error)
    }
}


