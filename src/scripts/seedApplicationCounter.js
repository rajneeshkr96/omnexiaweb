import mongoose from "mongoose";
import ApplicationCounter from "../models/applicationCounter.model.js";

await mongoose.connect(process.env.MONGO_URI);

await ApplicationCounter.create({
  dateStr: "20250103",
  counter: 5,
});

console.log("✅ ApplicationCounter seeded");
process.exit(0);
