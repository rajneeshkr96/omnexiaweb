import User from "../models/User.js";
import ApplicationCounter from "../models/ApplicationCounter.js";
import JobOpening from "../models/JobOpening.js";
import ContactSubmission from "../models/ContactSubmission.js";
import JobApplication from "../models/JobApplication.js";
import nodemailer from "nodemailer";
import Certificate from "../models/Certificate.js";
import path from "path";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


export default transporter;

const MODELS = {
  user: User,
  applicationcounter: ApplicationCounter,
  jobopening: JobOpening,
  contactsubmission: ContactSubmission,
  jobapplication: JobApplication,
};

/* GET ALL */
export const getAll = async (req, res) => {
  const { model } = req.params;
  const Model = MODELS[model];

  if (!Model) {
    return res.status(400).json({ message: "Invalid model" });
  }

  const records = await Model.find().sort({ createdAt: -1 });
  res.json(records);
};

/* CREATE */
export const createOne = async (req, res) => {
  const { model } = req.params;
  const Model = MODELS[model];

  if (!Model) {
    return res.status(400).json({ message: "Invalid model" });
  }

  const record = await Model.create(req.body);
  res.json(record);
};

/* UPDATE */
export const updateOne = async (req, res) => {
  const { model, id } = req.params;
  const Model = MODELS[model];

  if (!Model) {
    return res.status(400).json({ message: "Invalid model" });
  }

  const updated = await Model.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json(updated);
};

/* DELETE */
export const deleteOne = async (req, res) => {
  const { model, id } = req.params;
  const Model = MODELS[model];

  if (!Model) {
    return res.status(400).json({ message: "Invalid model" });
  }

  await Model.findByIdAndDelete(id);
  res.json({ success: true });
};

export const submitContactForm = async (req, res) => {
  try {
    const data = req.body;

    // 1. Save to DB
    const submission = await ContactSubmission.create(data);

    // 2. Email to Admin
    await transporter.sendMail({
      from: `"Omnixia Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "-"}</p>
        <p><strong>Company:</strong> ${data.company || "-"}</p>
        <p><strong>Service:</strong> ${data.service_interested}</p>
        <p><strong>Budget:</strong> ${data.project_budget || "-"}</p>
        <p><strong>Timeline:</strong> ${data.project_timeline || "-"}</p>
        <p><strong>Details:</strong><br/>${data.project_details}</p>
      `,
    });

    // 3. Thank-you email to User
    await transporter.sendMail({
      from: `"Omnixia Technology" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Thank you for contacting Omnixia Technology",
      html: `
        <h2>Thank You, ${data.full_name}!</h2>
        <p>We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
        <br/>
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>Our team reviews your request</li>
          <li>A specialist will contact you</li>
        </ul>
        <br/>
        <p>Best Regards,<br/>
        <strong>Omnixia Technology</strong><br/>
        📧 support@omnixiatechnology.in</p>
      `,
    });

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (err) {
    console.error("Contact submission error:", err);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
};

export const uploadCertificate = async (req, res) => {
  try {
    const { applicationId, fullName } = req.body;

    if (!req.file)
      return res.status(400).json({ message: "Certificate file required" });

    const exists = await Certificate.findOne({ applicationId });
    if (exists)
      return res.status(400).json({ message: "Certificate already uploaded" });

    const cert = await Certificate.create({
      applicationId,
      fullName,
      filePath: req.file.path,
    });

    res.status(201).json(cert);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const downloadCertificate = async (req, res) => {
  const { applicationId } = req.params;

  const cert = await Certificate.findOne({ applicationId });

  if (!cert)
    return res.status(404).json({ message: "Certificate not found" });

  if (cert.downloaded)
    return res
      .status(403)
      .json({ message: "Certificate already downloaded" });

  cert.downloaded = true;
  await cert.save();

  res.download(path.resolve(cert.filePath));
};


