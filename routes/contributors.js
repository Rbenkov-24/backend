import express from 'express';
import Contributor from '../models/contributor.model.js';

const contributorRouter = express.Router();

// Route to get all contributors
contributorRouter.get('/', async (req, res) => {
  try {
    // Retrieve and return a list of active contributors, sorted by name in ascending order
    const contributors = await Contributor.find({ isActive: true }).sort('name'); 
    res.json(contributors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default contributorRouter;