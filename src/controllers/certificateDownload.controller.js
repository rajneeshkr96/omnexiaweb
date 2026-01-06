import Certificate from "../models/Certificate.js";
import path from "path";

export const downloadCertificate = async (req, res) => {
  const { certificateId, email } = req.body;

  if (!certificateId || !email)
    return res.status(400).json({ message: "Missing data" });

  const cert = await Certificate.findOne({
    certificateId,
    email: email.toLowerCase(),
  });

  if (!cert)
    return res.status(404).json({ message: "Certificate not found" });

  if (cert.downloaded)
    return res.status(403).json({
      message: "Certificate already downloaded",
    });

  cert.downloaded = true;
  await cert.save();

  res.download(path.resolve(cert.filePath));
};
