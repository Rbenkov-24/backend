import express from 'express';
import { google } from 'googleapis';

const youtubeRouter = express.Router(); // Create router for YouTube API routes
const youtube = google.youtube('v3'); // Initialize YouTube API client

// GET route to fetch videos
youtubeRouter.get('/videos', async (req, res) => {
  const keyword = req.query.keyword; // Get keyword from the search query
  const maxResults = req.query.maxResults || 10; 

  try {
    let response;

    if (keyword) {
      // Search for videos based on the keyword
      response = await youtube.search.list({
        part: 'snippet',
        maxResults: maxResults,
        q: keyword, // Search query using the keyword
        type: 'video',
        order: 'relevance', // Sort by relevance to the keyword
        key: process.env.YOUTUBE_API_KEY,
      });
    } else {
      // Default to fetching the latest videos from the freeCodeCamp channel
      response = await youtube.search.list({
        part: 'snippet',
        maxResults: maxResults,
        channelId: 'UC8butISFwT-Wl7EV0hUK0BQ', // freeCodeCamp channel ID
        type: 'video',
        order: 'date', // Sort by the newest videos
        key: process.env.YOUTUBE_API_KEY,
      });
    }

    res.json(response.data); // Send fetched video data as JSON
  } catch (error) {
    console.error("YouTube API error:", error);
    res.status(500).json({ error: error.message }); // Send error message if the API call fails
  }
});

// Export the router for use in other files
export default youtubeRouter; 