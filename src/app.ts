import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import connectDB from "./config/db";

import seedAdmin  from "./utils/seedAdmin";

const app = express();
connectDB(); // Call the function to connect to MongoDB

seedAdmin(); // Call the function to seed the admin user

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
