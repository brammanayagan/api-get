import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: String,
    mobile: Number,
    email: { type: String, unique: true },
    password: String,
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
