import mongoose from "mongoose";

const FormLockSchema = new mongoose.Schema({
    email:{type: String},
    name: {type: String},
    subject: {type: String},
    message: {type: String},

})
const FormLock = mongoose.model("Form", FormLockSchema);

export default FormLock