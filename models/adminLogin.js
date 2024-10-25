import mongoose from "mongoose";

//schema for admin login
const adminLoginSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true, //removes any white space from the beginning and end of the username preventing issues with spaces
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isActive: {
      //to check whether the admin account is still active (still has access)
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
); //enable timestamps to automatically manage 'createdAt' and 'updatedAt' fields.

//create a model for the admin login
const AdminLogin = mongoose.model("AdminLogin", adminLoginSchema);
export default AdminLogin; //export the model for use in other files
