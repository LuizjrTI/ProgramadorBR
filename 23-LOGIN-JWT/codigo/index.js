require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const adminRouter = require("./routes/adminRouter"); //reqrequire("./routes/adminRouter"); //
const userRouter = require("./routes/userRouter");

mongoose
  .connect(process.env.URL_MONGO)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
