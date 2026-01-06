import express from "express";
import JobOpening from "../models/JobOpening.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await JobOpening.find().lean();
  res.json(jobs);
});

export default router;
