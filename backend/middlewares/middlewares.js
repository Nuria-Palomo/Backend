import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


const tokenExpirationTime = 3 * 60 * 60 * 1000

dotenv.config();
const secretKey = process.env.SECRET_KEY

export default async function hashpassword(user, next) {
  try {
    if (user.isModified('password')) {
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(user.password, salt)
      user.password = hash
    } next();
  } catch (error) {
    next(error)
  }
}

export const generateToken = (req) => {
  try {
    const { _id, email, role } = req;
    const token = jwt.sign({ _id, email, role }, secretKey, {
      expiresIn: tokenExpirationTime,
    });

    req.token = token;

    return token;
  } catch (error) {
    console.error("Hubo error al generar el token");
  }
};

export const tokenVerification = (req, res, next) => {
  const token = req.header('auth-token')
  if(!token)
  return res.status(401).json({mensaje:"Acceso denegado"})
  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY)
    req.user = verify 
    next()
  } catch (error) {
    console.log(error)
    
  }
}

export const verifyAdminRole = (req, res, next) => {

  const userRole = [req.user.role]

  console.log(userRole)

  if (req.user && user.Role.includes('admin')) {
    next();
  }else {
    res.status(403).json({message:'Permiso denegado'});
  }
};
