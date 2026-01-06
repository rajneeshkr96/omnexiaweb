import express from "express";
import multer from "multer";
import {
  uploadCertificate,
  downloadCertificate,
} from "../controllers/certificate.controller.js";

const router = express.Router();

/* Multer config */
const storage = multer.diskStorage({
  destination: "uploads/certificates",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ROUTES */
router.post("/upload", upload.single("file"), uploadCertificate);
router.get("/download", downloadCertificate);

export default router;
