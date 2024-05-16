import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

const port = process.env.BACKEND_PORT || 4000;

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// Defining routes
app.use("/api/books", bookRoute);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
