import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    certificateId: { type: String, required: true },
    name: String,
    email: String,
    filePath: String,

    isDownloaded: { type: Boolean, default: false },
    downloadedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("Certificate", certificateSchema);
