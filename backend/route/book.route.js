import express from "express";
import { getBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  getBooks(req, res);
});

export default router;
