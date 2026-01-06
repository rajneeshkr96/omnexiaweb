import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // CHANGE IF NOT GMAIL
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // ✅ THIS FIXES YOUR ERROR
  },
});

await transporter.sendMail({
  from: `"Omnexia Technology" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: "🚀 Omnexia Test Email",
  text: "Email is working successfully!",
});

console.log("✅ Test email sent successfully");
