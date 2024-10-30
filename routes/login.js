import express from 'express';
import Login from '../models/login.model.js'; 

// Create a new router instance for login-related routes
const loginRouter = express.Router(); 

// Define a POST route at '/' for handling user login requests
loginRouter.post('/', async (req, res) => {
    console.log('Login attempt:', req.body); // Log details of the login attempt for debugging
    const { userName, password } = req.body; // Extract username and password from request body

    try {
        // Search for a user in the database with the provided username
        const user = await Login.findOne({ userName }); 
        console.log('Database user:', user); // Log the retrieved user data for debugging

        // Log input and database credentials to verify the data being compared
        console.log('Comparing:');
        console.log('Input userName:', userName);
        console.log('Input password:', password);
        console.log('DB userName:', user?.userName);
        console.log('DB password:', user?.password);

        // Check if the user exists; if not, respond with a 401 Unauthorized error
        if (!user) {
            console.log('User not found');
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Directly compare the input password with the stored password
        if (user.password !== password) { 
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Store the user ID in the session to track the logged-in user
        req.session.userId = user._id;
        res.status(200).json({ message: 'Login successful', userId: user._id }); // Send success response with user ID
    } catch (error) {
        console.error('Error during login:', error); // Log any errors for debugging
        res.status(500).json({ message: 'Internal server error' }); // Respond with a 500 status code for server errors
    }
});
// Export the loginRouter to use in other parts of the application
export default loginRouter; 