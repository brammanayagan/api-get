import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: String,
    mobile: Number,
    email: String,
    createdBy: {
      type: String,
      default: "Admin",
    },
    updatedBy: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("GetUserData", userSchema);

export default userModel;
