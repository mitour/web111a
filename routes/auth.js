const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const User = require("../model/User");
const { registerValidation } = require("../validation");
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
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
      console.log(err);
    }
  }
);
module.exports = router;
