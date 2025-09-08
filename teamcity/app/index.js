const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><p>Welcome to the Home Page.</p>");
});

app.get("/help", (req, res) => {
  res.send("<h1>Help Page</h1><p>This is the Help Page.</p>");
});

app.get("/query", (req, res) => {
  res.send("<h1>Query Page</h1><p>Submit your queries here.</p>");
});

// Start server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
