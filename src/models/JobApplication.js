import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema(
  {
    
    applicationId: {
      type: String,
      unique: true,
      index: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,

    education: String,
    institution: String,
    currentYear: String,
    major: String,

    linkedinurl: String,
    githuburl: String,
    portfoliourl: String,

    jobOpeningId: String,
    positionType: String,
    coverLetter: String,
    skills: String,

    resume: String, // file path

    status: {
      type: String,
      default: "Under Review", // 👈 status system
      enum: ["Under Review", "Shortlisted", "Rejected", "Selected"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("JobApplication", JobApplicationSchema);
