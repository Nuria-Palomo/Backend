import mongoose from "mongoose";

const url="mongodb://127.0.0.1:27017/form"

try{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() =>{
        console.log('¡Concectado a MongoDB!')
    }).catch((error) => {
        console.log("¡Error al conectar MongoDB!", error)
    })



} catch (error) {
    console.error("¡Error al conectar MongoDB!", error)
    procces.exit(1)
}

export default mongoose.connection;