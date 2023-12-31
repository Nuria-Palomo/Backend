import mongoose from 'mongoose'
import hashpassword from '../middlewares/middlewares.js';

const UserSchema = mongoose.Schema ({

    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type:String,
        enum: ['user', 'admin'],
        default: 'user',
    }



}
); 
UserSchema.pre('save', async function(next) {
    try {
        await hashpassword(this, next)
    } catch (error) {
        console.log('Hubo un error al guardar la contraseña hasheada')
    }
})

const User = mongoose.model("User", UserSchema)

export default User
