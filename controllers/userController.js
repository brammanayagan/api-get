import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { userName, mobile, email } = req.body;
    const creating = await userModel.create({ userName, mobile, email });
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
