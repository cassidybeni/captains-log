const express = require("express");
const logs = require("./controllers/logsController");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to the captain's log`);
});

app.use("/logs", logs);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
