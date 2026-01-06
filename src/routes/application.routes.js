import express from "express";
import JobApplication from "../models/JobApplication.js";

const router = express.Router();

/**
 * GET APPLICATION STATUS
 * /api/application/status/OMNT202412001
 */
router.get("/status/:applicationId", async (req, res) => {
  try {
    const { applicationId } = req.params;

    const app = await JobApplication.findOne({ applicationId });

    if (!app) {
      return res.status(404).json({
        message: "Invalid Unique ID",
      });
    }

    // ⚠️ RESPONSE MATCHES YOUR UI EXPECTATION
    res.json({
      first_name: app.firstName,
      last_name: app.lastName,
      status: app.status, // under_review / accepted / rejected
      applied_date: app.createdAt,
      job_opening: app.jobOpeningId || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
