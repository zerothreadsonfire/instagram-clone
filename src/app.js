import express from "express";
import mongoose from "mongoose";

import  {MONGO_URI}  from "../config/keys.js";

import "../models/User.js";

import router from "../routes/auth.js";

const app = express();

app.use(express.json());
app.use(router);

mongoose.connect(MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
})
mongoose.connection.on("error", (err) => {
  console.log("Error connecting...");
})

app.get("/", (req, res) => {
  res.send("welcome to express server!!");
})

app.listen(5000, () => {
  console.log("listening on port 5000");
})