const express = require("express");
const app = express();
require("dotenv").config();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connect to DB");
  }
);

app.use(express.json());
app.use("/user", authRoute);

app.listen(3000, () => console.log("server is on and running"));
