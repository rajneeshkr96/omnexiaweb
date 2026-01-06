import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔗 Mongo URI in db.js:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed");
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
