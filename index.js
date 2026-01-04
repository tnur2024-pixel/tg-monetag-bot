import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

// 🔹 MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// 🔹 Simple test route
app.get("/", (req, res) => {
  res.send("TG Monetag Bot Backend Running");
});

// 🔹 Port (Render uses this)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
