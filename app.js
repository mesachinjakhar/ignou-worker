const express = require("express");
const emailWorker = require("./worker/emailWorker");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("PONG");
});

emailWorker();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
