import User from '../model/userModel.js'
import bcrypt from 'bcryptjs'
import hashpassword from '../middlewares/middlewares.js'
import { generateToken } from '../middlewares/middlewares.js'
import Jwt  from 'jsonwebtoken'

export const login = async (req, res) => {

    
    const {email, password} = req.body

        console.log(req.body)

    const user = await User.findOne({ email }) 
   

    if(!user) {
        return res.status(400).json({message: "Ha ocurrido un error"})
    } else {
        const validPassword = await bcrypt.compare(password, user.password)

        console.log(validPassword)

        if(!validPassword) {
            return res.status(400).json({ message: "Ha ocurrido un error" })
        } 
        
        
    } 

    const userRole = user.role

    /*console.log(user)*/
    const token = Jwt.sign({ _id:  user._id, username: user.name, email: user.email, role: user.role}, process.env.SECRET_KEY)
    
    await res.header({
      "auth-token": token,
      
    }).json({ token, userRole })

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


