import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middleware/errorHandler.js";
import resourceRoutes from "./routes/resource.routes.js";
import connectDB from "./config/db.js";
import publicRoutes from "./routes/public.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import certificateRoutes from "./routes/certificate.routes.js";
import path from "path";
connectDB();
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api", publicRoutes); 
app.use("/api/models", resourceRoutes);
app.use("/api/application", applicationRoutes);
app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/api/contact", resourceRoutes);
app.use("/api/certificate", certificateRoutes);
app.use(errorHandler);
app.use("/api/models/certificate", certificateRoutes);
export default app;
