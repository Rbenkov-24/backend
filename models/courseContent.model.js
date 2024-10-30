// This schema combine the content from my "Add Content" admin page and the "Explore Courses" page into a single collection "courseContent" in my MongoDB database
import mongoose from "mongoose";

// Schema for course content
const courseContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructorName: {
      type: String,
      required: true,
      trim: true,
    },
    video: {
      url: {
        type: String,
        required: true,
      },
      videoId: {
        type: String,
        required: true,
      }
    }
  },

  { timestamps: true } // Enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields
);

// Indexes
courseContentSchema.index({ title: 1 });
courseContentSchema.index({ instructorName: 1 });
courseContentSchema.index({ "video.videoId": 1 });
courseContentSchema.index({ instructorName: 1, title: 1 }); // Compound index for searching by instructor and title

// Create a model for the course content
const CourseContent = mongoose.model("CourseContent", courseContentSchema, "courseContent");

// Export the model for use in other files
export default CourseContent;
