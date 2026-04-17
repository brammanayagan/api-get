import express from "express";
import { createUser, getUser } from "../controllers/userController.js";

const route = express.Router();

route.post("/create", createUser);
route.get("/fetch", getUser);

export default route;

//http://localhost:5000/api/user/create
//http://localhost:5000/api/user/fetch
