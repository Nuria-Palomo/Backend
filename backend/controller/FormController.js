import FormLock from "../model/FormModel.js";


//Crud (crear, leer, acrualizar y borrar)

//crear
export const createForm = async (req, res) => {
    const {Email, Name, Subject, Message} = req.body

    if (!Email || !Name || !Subject || !Message) {
     
       return res.status(400).json ({message: "Todos los campos son requeridos."})
    }
    try {
        const form = await FormLock.create (req.body)
        res.status(201).json(form)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
};

//traer un formulario

export const getFormid = async (req, res) => {
    try {
        const id = req.params.id //no debería de pasarse el id
        const form = await FormLock.find(id)
        res.status(200).json(form)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//traer todos los formularios

export const getForms = async (req, res) => {
    try {
        const form = await FormLock.find()
        res.status(200).json(form)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//Método post
export const postForms = async (req, res) => {
    try {
        //Obtengo los datos del body
        const formData = req.body;

        //Guado los datos en la base de datos
        const savedForm = await FormLock.create() 

        res.status(200).json(savedForm)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//actualizar el formulario

export const updateForm = async (req, res) =>{
    const {Email, Name, Subject, Message} = req.body
    if (!Email && !Name  && !Subject && !Message) {
        return res.status(400).json ({message: "Deben proporcionar al menos un campo para actualizar."});
    }
    try {
        const id = req.params.id
        const form = await FormLock.findByIdAndUpdate({_id: id}. req.body, {new:true});
        if(!form)
            return res.status(404).json ({message: "No se encontró el formulario con el id especificado."});

        res.status(200).json(form)

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//borrar
export const deleteform = async (req, res) => {
    try {
        const id = req.params.id
        const form = await FormLock.findByIdAndUpdate({_id: id});
        if(!form)
            return res.status(404).json ({message: "No se encontró el formulario con el id especificado."});
        res.status(200).json()
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

 