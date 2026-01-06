import JobApplication from "../models/JobApplication.js";

export default async function generateApplicationId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const prefix = `OMNT${year}${month}`;

  // Find last application for this month
  const last = await JobApplication.findOne({
    applicationId: { $regex: `^${prefix}` },
  })
    .sort({ createdAt: -1 })
    .lean();

  let nextNumber = 1;

  if (last?.applicationId) {
    const lastNumber = parseInt(last.applicationId.slice(-3));
    nextNumber = lastNumber + 1;
  }

  return `${prefix}${String(nextNumber).padStart(3, "0")}`;
}