const express = require("express");
const app = express();
require("dotenv").config();
const helmet = require("helmet");
const path = require("path");
const multer = require("multer");
const upload = multer();
const authRoute = require("./routes/auth");
const verify = require("./verifyToken");
const mongoose = require("mongoose");
app.use(helmet());
app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));

app.use("/users", upload.array(), verify, authRoute);

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("server is on and running"));
