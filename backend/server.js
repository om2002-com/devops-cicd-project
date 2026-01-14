const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Updated via Render CI/CD!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

