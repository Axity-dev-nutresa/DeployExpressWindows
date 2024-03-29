const express = require("express");
const path = require("path");

const basePath = '';
const app = express();
const port=8080

app.use(basePath + "/", express.static(path.resolve(__dirname + "/build")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "/build/index.html"));
});

app.listen(port);