import User from '../model/userModel.js'
import bcrypt from 'bcryptjs'
import hashpassword from '../middlewares/middlewares.js'
import { generateToken } from '../middlewares/middlewares.js'
import Jwt  from 'jsonwebtoken'

export const login = async (req, res) => {

    //LOOKS UP FOR THE DATA THAT'S BEING PUT ON THE INPUTS
    const { uname, email, password } = req.body
    const user = await User.findOne({ email }) || await User.findOne({ uname });

   

    if(!user) {
        return res.status(400).json({message: "Incorrect Email or username"})
    } else {
        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword) {
            return res.status(400).json({ message: "invalid password" })
        } 
        
        
    }
    const token = Jwt.sign({ _id:  user._id, username: user.uname, email: user.emai}, process.env.SECRET_KEY)
    
    await res.header({
      "auth-token": token,
      
    }).json( token )

}


/*export const login = async (req, res) => {
    try{
    const { email, password } = req.body
    //Busca al usuario por el email
    const user = await User.findOne({email})
    //comprueba si el usuario existe
    if (!user) {
        return res.status(404).json({menssage:"Usuario no encontrado"})
    }else {
        const passwordok = await bcrypt.compare(password, user.password)

        if (!passwordok){
        return res.status(400).json({message:"Clave inválida"})
        } 

    }

    
   

    //Genera el token
   const newtoken = generateToken(user); 

    
    //Sigue después de generar el token
    res.header({'token':newtoken})



}   catch (error) {
    res.status(500).json({ mensaje: 'Error en el servidor' });

}
}*/

export const createUser = async (req, res, next) =>{
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        next (error)
    }
}


