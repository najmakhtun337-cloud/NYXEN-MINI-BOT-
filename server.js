const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/api/pair", (req, res) => {
  const number = req.query.number;
  if (!number) return res.json({ error: "Number required" });

  // Demo pairing code
  const fakeCode = Math.random().toString(36).substring(2, 8).toUpperCase();

  res.json({ bot: "DH ERROR", pair_code: fakeCode });
});

// For Vercel static hosting
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🤖 DH ERROR AI Bot running on port", PORT);
});
