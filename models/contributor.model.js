import mongoose from "mongoose";

//schema for contributors
export const contributorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //remove extra spaces
    },
    picture: {
      type: String, //stores the URL of the contributor's image as a string, since URLs are represented as text
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
      //to check if the contributor is still active
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
); //enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields.

//create a model for contributors
const Contributor = mongoose.model("Contributor", contributorSchema);

export default Contributor; //export the model for use in other files
