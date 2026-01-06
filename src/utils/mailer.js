import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify connection on server start
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email server error:", error);
  } else {
    console.log("✅ Email server is ready to send messages");
  }
});

export default transporter;
