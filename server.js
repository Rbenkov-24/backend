//backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/dbConn.js";
import contributorRouter from './routes/contributors.js';
import youtubeRouter from './routes/youtube.js';
import loginRouter from './routes/login.js';
import session from "express-session";


// Load environment variable from .env file
dotenv.config();


// Create an Express application
const app = express();

// Define PORT variable from environment variables, default to 4000
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Configure and use express-session
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_default_secret', // Use an environment variable for the secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true in production if using HTTPS
}));

// Use the contributors route prefixed with /api
app.use('/api/contributors', contributorRouter);
app.use('/api/youtube', youtubeRouter);
app.use('/api/login', loginRouter);


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