import userLock from "../model/userModel.js";

//Crud (crear, leer, acrualizar y borrar)

//crear
export const createUser = async (req, res) => {
    const {Email, Name, Subject, Message} = req.body

    if (!Email || !Name || !Subject || !Message) {
     
       return res.status(400).json ({message: "Todos los campos son requeridos."})
    }
    try {
        const user = await userLock.create (req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
};

//traer un user

export const getUserId = async (req, res) => {

    console.log(req.user)
    try {
        const id = req.params.id //no debería de pasarse el id
        console.log(id)
        const user = await userLock.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//traer todos los users

export const getUsers = async (req, res) => {
    try {
        const user = await userLock.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//Método post
/*export const postUsers = async (req, res) => {
    try {
        //Obtengo los datos del body
        const userData = req.body;

        //Guado los datos en la base de datos
        const savedUser = await userLock.create() 

        res.status(200).json(savedUser)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}*/

//actualizar 

export const updateUser = async (req, res) =>{
    const {Email, Name, Subject, Message} = req.body
    if (!Email && !Name  && !Subject && !Message) {
        return res.status(400).json ({message: "Deben proporcionar al menos un campo para actualizar."});
    }
    try {
        const id = req.params.id
        const user = await userLock.findByIdAndUpdate({_id: id}. req.body, {new:true});
        if(!user)
            return res.status(404).json ({message: "No se encontró el userulario con el id especificado."});

        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//borrar
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userLock.findByIdAndUpdate({_id: id});
        if(!user)
            return res.status(404).json ({message: "No se encontró el usuario con el id especificado."});
        res.status(200).json()
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

 