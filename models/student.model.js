import mongoose from "mongoose";

// Schema for students
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from the beginning and end
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures each email is unique
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    age: {
      type: Number,
      required: true,
      min: 0, // Ensures age is a positive number
    },
  },
  { timestamps: true } // Automatically manage 'createdAt' and 'updatedAt' fields
);

// Indexing for email
studentSchema.index({ email: 1 }); // Index on email for faster lookup

// Create a model for students
const Student = mongoose.model("Student", studentSchema, "students");

// Export the model for use in other files
export default Student;