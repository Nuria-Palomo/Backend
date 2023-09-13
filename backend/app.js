import express from 'express';
import db from './database/db.js';
import FormRouter from './routes/FormRoutes.js';
import cors from 'cors';
import morgan from 'morgan';
import auth_routes from './routes/authRoutes.js'


const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/form', FormRouter);

app.use(morgan('dev'));

app.use(auth_routes);


export default app;



