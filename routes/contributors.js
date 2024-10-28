import express from 'express';
import Contributor from '../models/contributor.model.js';

const contributorRouter = express.Router();

// Route to get all contributors
contributorRouter.get('/', async (req, res) => {
  try {
    const contributors = await Contributor.find({ isActive: true }); // Fetch active contributors
    res.json(contributors); // Send the contributors as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default contributorRouter;