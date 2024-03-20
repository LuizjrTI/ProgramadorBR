const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.type("html");
  // res.send("Hello World vindo do GET");
  res.send("<h1>Hello World vindo do GET</h1>");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
