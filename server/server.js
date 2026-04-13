// server.js

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());


// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Sample API route
app.get("/api/data", (req, res) => {
  res.json({
    message: "This is a sample API response",
  });
});

// POST route example
app.post("/api/data", (req, res) => {
  const body = req.body;
  res.json({
    message: "Data received",
    data: body,
  });
});

// Server port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});