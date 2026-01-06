import mongoose from "mongoose";

const applicationCounterSchema = new mongoose.Schema(
  {
    dateStr: String,
    counter: Number,
  },
  { timestamps: true }
);

export default mongoose.model(
  "ApplicationCounter",
  applicationCounterSchema
);
