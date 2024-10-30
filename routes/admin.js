import express from 'express';
import Login from '../models/login.model.js';


const adminRouter = express.Router();

// Define a GET route at '/info' to retrieve the admin's profile information
adminRouter.get('/info', async (req, res) => {
  try {
    // Get the admin's ID from the session which will be set during login
    const adminId = req.session.userId;

    // Query the database to find the admin by ID and retrieve only their name and picture fields
    const admin = await Login.findById(adminId).select('name picture');
    
    // If no admin is found with the given ID, return a 404 error with a relevant message
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Respond with the admin's name and picture in JSON format
    res.json({
      name: admin.name,
      picture: admin.picture
    });
  } catch (error) {
    // Log any errors encountered and return a 500 error with a relevant message
    console.error('Error fetching admin info:', error);
    res.status(500).json({ message: 'Error fetching admin info' });
  }
});

// Export the router to make it accessible in other parts of the application
export default adminRouter;