const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
router.post(
  "/register",
  async (req, res, next) => {
    try {
      await registerValidation(req.body);
      next();
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  async (req, res, next) => {
    try {
      const isEmailExist = await User.findOne({ email: req.body.email });
      if (isEmailExist)
        return res.status(400).send("email is already registered.");
      next();
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  },
  async (req, res) => {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      const savedUser = await user.save();
      res.send({ user: savedUser._id });
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

router.post(
  "/login",
  async (req, res, next) => {
    try {
      await loginValidation(req.body);
      next();
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send("email or password is wrong.");
      const validPass = await bcryptjs.compare(
        req.body.password,
        user.password
      );
      if (!validPass)
        return res.status(400).send("email or password is wrong.");
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res.writeHead(200, { Authorization: `Bearer ${token}` });
      res.end("logged in!");
    } catch (err) {
      res.status(500).send("Internal server error");
    }
  }
);
router.get("/", verify, (req, res) => {
  res.status(200).send(`This is user ${req.user._id} information page`);
});
module.exports = router;
