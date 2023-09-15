import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export default async function  hashpassword (password){
    const passwordHashed = await bcrypt.hash(password, 10)
    return passwordHashed
}

export const generateToken = (req) => {
    try {
      const { _id, name, role } = req;
      const token = jwt.sign({ _id, name, role }, secretKey, {
        expiresIn: tokenExpirationTime,
      });
  
      req.token = token;
  
      return token;
    } catch (error) {
      console.error("Hubo error al generar el token");
    }
  };

