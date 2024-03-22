const express = require("express");
const bodyParser = require("body-parser");
const route = express.Router();
const posts = require("../model/posts");
const cors = require("cors");

const opt = {
  origin: "http://localhost:3000",
};

route.use(cors(opt));

route.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.obterTodosPosts()));
});

route.post("/new", bodyParser.json(), (req, res) => {
  posts.inserirPost(req.body.title, req.body.description);
  res.send("Post adicionado");
});

route.delete("/remove/:id", bodyParser.json(), (req, res) => {
  posts.removerPost(req.params.id);
  res.send("Post removido");
});

module.exports = route;
