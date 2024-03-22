const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const apiRoute = require("./routes/api");

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", apiRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
