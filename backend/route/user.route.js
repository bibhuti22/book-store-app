import express from "express";
import { login, signup } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", (req, res) => {
  signup(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

export default router;
