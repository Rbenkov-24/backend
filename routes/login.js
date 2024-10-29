//backend/routes/login.js
import express from 'express';
import Login from '../models/login.model.js'; 

const loginRouter = express.Router();

// POST route for user login
loginRouter.post('/', async (req, res) => {
    console.log('Login attempt:', req.body); // Log the login attempt
    const { userName, password } = req.body;

    try {
        const user = await Login.findOne({ userName }); // Using user model
        console.log('Database user:', user);
        console.log('Comparing:');
        console.log('Input userName:', userName);
        console.log('Input password:', password);
        console.log('DB userName:', user?.userName);
        console.log('DB password:', user?.password);

        if (!user) {
            console.log('User not found'); // Log user not found
            return res.status(401).json({ message: 'Invalid username or password' });
        }



        if (user.password !== password) { // Direct password comparison
            console.log('Password mismatch'); // Log invalid password
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        req.session.userId = user._id; // Store user info in session
        res.status(200).json({ message: 'Login successful', userId: user._id });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default loginRouter;