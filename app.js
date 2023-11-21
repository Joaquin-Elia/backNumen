import express from 'express';
import dotenv from 'dotenv'
import apiRouter from './routes/api.js';
import cors from 'cors'
import {connect} from './db/connect.js'

const app = express();
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

app.use('/api', apiRouter);
connect()

export default app;