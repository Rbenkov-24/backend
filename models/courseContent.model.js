//this schema combine the content from my "Add Content" admin page and the "Explore Courses" page into a single collection "courseContent" in my MongoDB database
import mongoose from "mongoose";

//schema for course content
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

  { timestamps: true } //enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields
);

//create a model for the course content
const CourseContent = mongoose.model("CourseContent", courseContentSchema, "courseContent");
//export the model for use in other files
export default CourseContent;
