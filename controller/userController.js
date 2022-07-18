const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verify = require("../verifyToken");
const User = require("../model/userModel");
const { registerValidation, loginValidation } = require("../validation");

async function hashPassword(password) {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcryptjs.compare(plainPassword, hashedPassword);
}

register = async (req, res) => {
  try {
    await registerValidation(req.body);
  } catch (err) {
    return res.status(400).send(err.message);
  }
  try {
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist)
      return res.status(400).send("email is already registered.");
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
  const { name, email, password, role } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: role || "basic",
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    return res.status(400).send(err);
  }
};

login = async (req, res) => {
  try {
    await loginValidation(req.body);
  } catch (err) {
    return res.status(400).send(err.message);
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("email or password is wrong.");
    const validPass = await validatePassword(password, user.password);
    if (!validPass) return res.status(400).send("email or password is wrong.");
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    res
      .writeHead(200, { Authorization: `Bearer ${token}` })
      .end(`${user.email} logged in.`);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
};

module.exports = { register, login };
