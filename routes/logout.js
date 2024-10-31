import express from 'express'; 

// Create a new router for handling logout requests
const logoutRouter = express.Router(); 

// Define a POST route for logging out
logoutRouter.post('/', (req, res) => {
  // Attempt to terminate the user's session
  req.session.destroy((err) => {
    if (err) { // If there is an error during session destruction
      console.error('Logout error:', err); 
      return res.status(500).json({ message: 'Could not log out, please try again' }); 

    }// Clear the session cookie from the user's browser
    res.clearCookie('connect.sid'); 
    return res.json({ message: 'Logout successful' }); 
  });
});

// Export the logout router for use in other parts of the application
export default logoutRouter; 