const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/names", (req, res) => {
  res.send("mahsa");
});

app.listen("8000", () => {
  console.log("server is running on port 8000");
});
