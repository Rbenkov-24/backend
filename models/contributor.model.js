import mongoose from "mongoose";

// Schema for contributors
export const contributorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
    },
    picture: {
      type: String, // Stores the URL of the contributor's image as a string, since URLs are represented as text
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    isActive: {
      // To check if the contributor is still active
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }// Enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields.

  
); 

// Indexes
contributorSchema.index({ name: 1 });
contributorSchema.index({ jobTitle: 1 });
contributorSchema.index({ isActive: 1 });
contributorSchema.index({ isActive: 1, name: 1 }); // Compound index for active contributors by name

// Create a model for contributors
const Contributor = mongoose.model("Contributor", contributorSchema, "contributors");

export default Contributor; // Export the model for use in other files
