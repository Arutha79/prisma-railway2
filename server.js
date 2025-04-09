const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("🎯 Prisma Railway is running"));

app.listen(PORT, () => console.log("✅ Prisma en ligne sur Railway"));
