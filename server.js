import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/dbConn.js";
import contributorRouter from './routes/contributors.js';


// Load environment variable from .env file
dotenv.config();

// Create an Express application
const app = express();

// Define PORT variable from environment variables, default to 4000
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors()); // Allow CORS for all routes



// Use the contributors route prefixed with /api
app.use('/api/contributors', contributorRouter);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Connect to database and start the server
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});