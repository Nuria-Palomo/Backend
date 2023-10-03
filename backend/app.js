import express from 'express';
import db from './database/db.js';
import FormRouter from './routes/FormRoutes.js';
import cors from 'cors';
import userRouter from './routes/authRoutes.js';
//import {createRoles} from './libs/initialSetup.js';





const app = express ();
//createRoles()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/form', FormRouter);
app.use('/user', userRouter);

const Port = process.env.Port || 8000;


app.listen(Port,() => {
    console.log(`Servidor en ejecución en el puerto ${Port}`)
})

export default app;



