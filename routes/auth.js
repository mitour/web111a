const router = require("express").Router();
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
  async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
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
