import express from "express";
import Login from "../models/login.model.js";

// Create a new router instance for login-related routes
const loginRouter = express.Router();

// Define a POST route at '/' for handling user login requests
loginRouter.post("/", async (req, res) => {
  console.log("Login attempt:", req.body); // Log details of the login attempt for debugging
  const { userName, password } = req.body; // Extract username and password from request body

  try {
    // Search for a user in the database with the provided username
    const user = await Login.findOne({ userName, isActive: true });
    console.log("Database user:", user); // Log the retrieved user data for debugging

    // Log input and database credentials to verify the data being compared
    console.log("Comparing:");
    console.log("Input userName:", userName);
    console.log("Input password:", password);
    console.log("DB userName:", user?.userName);
    console.log("DB password:", user?.password);

    // Check if the user exists and password matches
    if (!user || user.password !== password) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Save the logged-in user's ID in the session for tracking and maintaining login status
    req.session.userId = user._id;

    // Log the session details to verify the session data after login
    console.log("Session after login:", req.session);

    // Respond with a success status (200) and include the user's ID to confirm login was successful
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    console.error("Error during login:", error); 
    res.status(500).json({ message: "Internal server error" }); // Respond with a 500 status code for server errors
  }
});
// Export the loginRouter to use in other parts of the application
export default loginRouter;
