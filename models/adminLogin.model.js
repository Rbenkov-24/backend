import mongoose from "mongoose";

// Schema for admin login
const adminLoginSchema = new mongoose.Schema(
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
    isActive: {
      // To check whether the admin account is still active (still has access)
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
); // Enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields

// Create a model for the admin login
const AdminLogin = mongoose.model("AdminLogin", adminLoginSchema);
// Export the model for use in other files
export default AdminLogin; 
