import Certificate from "../models/Certificate.js";

export const verifyCertificate = async (req, res) => {
  const { certificateId } = req.params;

  const cert = await Certificate.findOne({ certificateId });

  if (!cert)
    return res.status(404).json({ valid: false });

  res.json({
    valid: true,
    fullName: cert.fullName,
    applicationId: cert.applicationId,
    issuedAt: cert.issuedAt,
  });
};
