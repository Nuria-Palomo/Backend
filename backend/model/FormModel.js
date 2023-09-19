import mongoose from "mongoose";

const FormLockSchema = new mongoose.Schema({
    email:{type: String,
           required: true,
           unique: true
},
    name: {type: String,
           required: true,
           unique: true
    },
    password: {type: String,
              required: true,
              unique: true
    }
    

})
const FormLock = mongoose.model("Form", FormLockSchema);

export default FormLock