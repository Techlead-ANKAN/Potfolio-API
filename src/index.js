// index.js
import express from "express";
import fs from "fs/promises";
const app = express();
const PORT = process.env.PORT || 3001;

// Read JSON data asynchronously
const data = JSON.parse(
  await fs.readFile(new URL("./data.json", import.meta.url), "utf-8")
);

// API endpoint
app.get("/api/portfolio", (req, res) => {
  res.json(data);
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Ankan Maity's API");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
