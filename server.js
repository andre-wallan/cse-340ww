// Require Statements
const express = require("express");
const app = express();
const path = require("path");
const static = require("./routes/static");

// Express Configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use(static);

// Index route
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});

// Start Server
const port = 5500;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
