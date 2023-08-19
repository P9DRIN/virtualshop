import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config({ path: './.env'})

const connect = async () => {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect(process.env.DATABASE_URL);
        console.log("Banco conectado com sucesso!");
    } catch (error) {
        console.log("Error: ", e.message);
    }
}

export default {connect};