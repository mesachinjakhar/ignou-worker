const express = require("express");
const emailWorker = require("./worker/emailWorker");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("PONG");
});

emailWorker();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port:", process.env.PORT);
});
