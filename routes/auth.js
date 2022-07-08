const router = require("express").Router();
const User = require("../model/User");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().max(255).required().email(),
  password: Joi.string()
    .required()
    .min(6)
    .pattern(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}"))
    .message(
      `"password" must be at least one uppercase letter, one lowercase letter and one number`
    ),
});

router.post(
  "/register",
  async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
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
