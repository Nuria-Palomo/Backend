import express from 'express';
import db from './database/db.js';
import FormRouter from './routes/FormRoutes.js';
import cors from 'cors';
import morgan from 'morgan';


const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/form', FormRouter);

app.use(morgan('dev'));


export default app;



