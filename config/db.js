import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connectd succesfully on ${conn.connection.host}`);
  } catch (err) {
    console.log("Error", err);
    process.exit(0);
  }
};

export default connectDB;
