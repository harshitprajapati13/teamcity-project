const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Home Page</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 20px; }
          h1 { color: #333; }
          p { font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page.</p>
      </body>
    </html>
  `);
});

// Help route
app.get("/help", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Help Page</title>
        <style>
          body { font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 20px; }
          h1 { color: #333; }
          p { font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>Help Page</h1>
        <p>This is the Help Page. Here you can find assistance and guidance.</p>
      </body>
    </html>
  `);
});

// Query route
app.get("/query", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Query Page</title>
        <st
