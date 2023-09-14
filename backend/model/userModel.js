import mongoose from 'mongoose'

const UserSchema = mongoose.Schema ({

    name: {
        type: String,
        required: true,
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
    }


},{
    strict: true, 
  }); 

export default  mongoose.model("User", UserSchema, "users")
