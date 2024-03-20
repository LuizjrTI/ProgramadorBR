## NODE EXPRESS - INSTLANDO O EXPRESS

- [Express JS](https://expressjs.com/pt-br/)

* `npm init` - Para iniciar um projeto com node
* `npm install express --save` - Instalando o express

## Uso / Exemplo

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

## NODE EXPRESS - GET

- Tipos possiveis de res

  - res.type('.html') => 'text/html'

  - res.type('html') => 'text/html'

  - res.type('txt') => 'text/plain'

  - res.type('json') => 'application/json'

  - res.type('application/json') => 'application/json'

  - res.type('png') => 'image/png'

## Uso / Exemplo

```javascript
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
```
