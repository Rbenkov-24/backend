import mongoose from "mongoose";

// Schema for admin login
const loginSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true, // Removes any white space from the beginning and end of the username preventing issues with spaces
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    name: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
    },
    picture: {
      type: String,
      required: true,             
    },
    isActive: {
      // To check whether the admin account is still active (still has access)
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // Enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields
); 

// Index to optimize queries by userName and isActive
loginSchema.index({ userName: 1, isActive: 1 }); // Compound index

// Create a model for the admin login
const Login = mongoose.model("Login", loginSchema, "adminLogin");

// Export the model for use in other files
export default Login;