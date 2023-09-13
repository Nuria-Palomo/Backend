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
    subject: {type: String},
    message: {type: String},

})
const FormLock = mongoose.model("Form", FormLockSchema);

export default FormLock