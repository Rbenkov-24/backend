import mongoose from 'mongoose';

// This function connects to the MongoDB database using Mongoose.
// It includes error handling to manage any connection issues that may arise.
export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`error:${error.message}`);
        process.exit(1)// Process code 1 means exit with failure, 0 means success

    }
}