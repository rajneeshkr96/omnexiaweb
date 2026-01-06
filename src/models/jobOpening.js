// src/models/JobOpening.js
import mongoose from "mongoose";

const JobOpeningSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: String,
    position_type: String, // intern / full-time
    location: String,
    description: String,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("JobOpening", JobOpeningSchema);
