import app from "./app.js";

console.log("🔗 Mongo URI:", process.env.MONGO_URI || "MISSING");
console.log("EMAIL USER:", process.env.EMAIL_USER);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
