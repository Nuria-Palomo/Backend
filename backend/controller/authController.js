import User from '../model/userModel.js'
import bcrypt from 'bcryptjs'
import hashpassword from '../middlewares/middlewares.js'
import { generateToken } from '../middlewares/middlewares.js'


export const login = async (req, res) => {
    try{
    const { email, password } = req.body
    //Busca al usuario por el email
    const user = await User.findOne({email})
    //comprueba si el usuario existe
    if (!user) {
        return res.status(404).json({menssage:"Usuario no encontrado"})
    }

    const passwordok = await bcrypt.compare(password, user.password)

    if (passwordok){
        req.user = user
    }

    //Genera el token
   const newtoken = generateToken(user); 

    
    //Sigue después de generar el token
    res.status(200).json({token:newtoken})



}   catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });

}
}

export const createUser = async (req, res, next) =>{
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        next (error)
    }
}


