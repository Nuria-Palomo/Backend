import User from '../model/userModel.js'


export const registrer = async (req, res) => {
    const { name, email,  password } = req.body
    console.log(name, email,  password)
let userSave = new User(req.body)
try {
    await userSave.save()
    res.send("Registro realizado exitosamente")
} catch (error) {
    res.send("Error en el registro")
    console.log(error)
}

}

export const login = (req, res) => res.send("Tu login ha sido creado");