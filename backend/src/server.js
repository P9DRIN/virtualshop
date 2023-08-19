import * as dotenv from 'dotenv';
import path from 'path'



import express from 'express'
import mongoose from 'mongoose'
import routes from './routes.js'
import db from './database.js'
import cors from 'cors'


const app = express();
const port = 3333;

app.use(cors());
app.use(express.json())
db.connect()
app.use(routes)

app.listen(port, () => {console.log(`🚀 Backend started at http://localhost:${port} `)});

