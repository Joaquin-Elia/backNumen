import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', false)

export const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('DB connected')
    } catch {
        console.log('DB error')
    }
}