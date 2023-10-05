import mongoose from "mongoose";

const FormLockSchema = new mongoose.Schema({
  
    email:{type: String,
           required: true,
           unique: true,
           validate: {
            validator: function(value) {
            // Expresión regular para validar el formato de un correo electrónico
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            return emailRegex.test(value);
          },
          message: 'El correo electrónico no es válido',
        },
           
},
    name: {type: String,
           required: true,
           unique: true
           
    },
    subject: {type: String,
              required: true,
              unique: true
    },
    message: {type: String,
        required: true,
        unique: true
},
    
    

})
const FormLock = mongoose.model("Form", FormLockSchema);

export default FormLock