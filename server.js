import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConn.js";

//load environment variable from .env file
dotenv.config();

//create an express application
const app = express();

//define PORT variable from envirnemnt variables, default tp 4000
const PORT= process.env.PORT || 4000;

//route for the root URL
app.get("/", (req, res) => {
  res.send(`Hello Ramy, your server is ready!`);
});

//connect to database and start the server
connectDB();
app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
