import mongoose from "mongoose";

const ContactSubmissionSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    service_interested: String,
    project_budget: String,
    project_timeline: String,
    project_details: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model(
  "ContactSubmission",
  ContactSubmissionSchema
);
