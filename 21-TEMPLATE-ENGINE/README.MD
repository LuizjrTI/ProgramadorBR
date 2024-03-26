## NODE - TEMPLATE ENGINE - EJS

- ​Para o VSCode identificar os comendos do EJS, vc pode instalar a extensão: EJS language support
- link de acesso a ferramenta [EJS](https://ejs.co)
- Para instalação use o comando `npm install ejs`

## NODE - SUBSTITUIÇÃO DE VARIAVEIS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Usuário</title>
  </head>

  <body>
    <h1><%=name%></h1>
    <h3><%=phone%></h3>
  </body>
</html>
```

```javascript
<!DOCTYPE html>
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("user", { name: "Luiz", phone: "9999-9999" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

```

## NODE - FOR NO EJS

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Usuário</title>
  </head>

  <body>
    <% for(let user of users){%>
    <h1><%=user.name%></h1>
    <h3><%=user.phone%></h3>
    <%}%>
  </body>
</html>
```

```javascript
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
