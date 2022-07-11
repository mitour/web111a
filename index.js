const express = require("express");
const app = express();
require("dotenv").config();
const helmet = require("helmet");
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
app.use(helmet());

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use("/user", authRoute);

app.listen(3000, () => console.log("server is on and running"));
