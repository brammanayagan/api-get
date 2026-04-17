import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import useRoute from "./routes/userRoute.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/user", useRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server connected on http://localhost:${PORT}`);
});
