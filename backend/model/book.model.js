import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: Number,
  author: String,
  country: String,
  imageLink: String,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number,
  category: String,
  price: Number,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
