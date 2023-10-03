import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';


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

export const generateToken = (req, res) => {
  try {
    const { _id, email, role } = req;
    const token = jwt.sign({ _id: _id, email: email, role: role }, secretKey, {
      expiresIn: tokenExpirationTime,
    });

    return res.header({"auth-token": token}).json(token);
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
  const token = req.header('auth-token')
  if(!token)
  return res.status(401).json({mensaje:"Acceso denegado"})
  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY)
    req.user = verify
    console.log(verify)
  } catch (error) {
    console.log(error)
    
  }

  const userRole = [req.user.role]
console.log("middleware")
  console.log(userRole)

  if (req.user && req.user.role==='admin') {
    next();
  }else {
    res.status(403).json({message:'Permiso denegado'});
  }
};

// Configuración del límite de intentos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo de intentos por IP en el período de tiempo especificado
  message: { error: 'Demasiadas solicitudes desde esta IP, por favor intenta nuevamente más tarde.' },
});