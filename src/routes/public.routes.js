import express from "express";
import ContactSubmission from "../models/ContactSubmission.js";
import upload from "../middleware/upload.js";
import generateApplicationId from "../utils/generateApplicationId.js";
import JobApplication from "../models/JobApplication.js";
const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const submission = await ContactSubmission.create(req.body);
    res.status(201).json(submission);
  } catch (error) {
    console.error("Contact save error:", error);
    res.status(500).json({
      error: "Failed to save contact submission",
    });
  }
});

router.post(
  "/apply",
  upload.single("resume"),
  async (req, res) => {
    try {
      const applicationId = await generateApplicationId();

      const record = await JobApplication.create({
        applicationId,
        ...req.body,
        resume: req.file?.path,
      });
      res.status(201).json({
        message: "Application submitted successfully",
        applicationId,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Application failed" });
    }
  }
);
router.get("/status/:applicationId", async (req, res) => {
  try {
    const { applicationId } = req.params;

    const application = await JobApplication.findOne({ applicationId });

    if (!application) {
      return res.status(404).json({
        message: "Invalid Unique ID",
      });
    }

    res.json({
      applicationId: application.applicationId,
      status: application.status,
      email: application.email,
      appliedAt: application.createdAt,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
export default router;
