import User from "../model/userModel.js";

export const roleVerification = (req, res) => {
    const id = req.user._id
    console.log(id)


}





/*import Role from '../model/userModel'

export const createRoles =async () => {
    try {
        const count = await Role.estimatedDocumentCount();

        if(count > 0) return;
    
        const values = await Promise.all([
        new Role({name: 'user'}).save(),
        new Role({name: 'admin'}).save(),
        ]);

        console.log(values);
    } catch (error) {
       console.error(error); 
        
    }

};*/
