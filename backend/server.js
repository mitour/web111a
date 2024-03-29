const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const path = require("path");
const authRoute = require("./routes/auth");
const verify = require("./verifyToken");
const mongoose = require("mongoose");
app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e));

app.use("/users", verify, authRoute);

// serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => console.log("server is on and running"));
