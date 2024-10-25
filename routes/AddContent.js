import express from "express";
import CourseContent from "../models/courseContent.model.js";

const router = express.Router();

//defining POST route
router.post("/api/AddContent", async (req, res) => {
  const { title, description, instructorName, videoUrl, videoId } = req.body;

  try {
    //validate input
    if (!title || !description || !instructorName || !videoUrl || !videoId) {
      return res.status(400).json({ message: "All fields are required." });
    }

    //creating a new content entry
    const newContent = new CourseContent({
      title,
      description,
      instructorName,
      video: {
        url: videoUrl,
        videoId: videoId,
      },
    });

    
    //save to the database
    const savedContent = await newContent.save();
    

    //respond with success message
    res.status(201).json({ message: "Content added successfully.", data: savedContent });
  } catch (error) {
    console.error("Error adding content:", error);
    res.status(500).json({ message: "Server error. Unable to add content." });
  }
});

export default router;
