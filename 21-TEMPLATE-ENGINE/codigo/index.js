const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3000;

let users = [
  {
    id: 0,
    name: "luiz",
    phone: "9999-9999",
  },
  {
    id: 1,
    name: "José",
    phone: "9999-9999",
  },
  {
    id: 2,
    name: "Figueiredo",
    phone: "9999-9999",
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("user", { users });
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
