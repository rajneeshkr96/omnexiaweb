import Certificate from "../models/Certificate.js";

export const uploadCertificate = async (req, res) => {
  try {
    const { certificateId, name, email } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "File required" });
    }

    const cert = await Certificate.create({
      certificateId,
      name,
      email,
      filePath: req.file.path,
    });

    res.json({ message: "Uploaded successfully", cert });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
  console.log("REQ BODY:", req.body);
  console.log("REQ FILE:", req.file);

};

export const downloadCertificate = async (req, res) => {
  try {
    const { certificateId, email } = req.query;

    const cert = await Certificate.findOne({ certificateId, email });

    if (!cert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.download(cert.filePath);
  } catch (err) {
    res.status(500).json({ message: "Download failed" });
  }
};
