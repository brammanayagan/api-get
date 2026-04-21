import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { userName, mobile, email, password } = req.body;
    const isEmail = userModel.findOne({ email });
    if (isEmail) {
      res.status(404).json({ msg: "Already logged in" });
      return;
    }
    const hashing = bcrypt.hash(password, 10);
    const creating = await userModel.create({
      userName,
      mobile,
      email,
      password: hashing,
    });
    res.status(201).json({ message: "Created Successfully", creating });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Error", err });
  }
};

export const getUser = async (req, res) => {
  try {
    const getting = await userModel.find();
    res.status(200).json({ message: "successfully fetched", getting });
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Error", err });
  }
};
