const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const {
  registerValidation,
  loginValidation,
  updateValidation,
} = require("../validation");
const { roles } = require("../roles");
const nodemailer = require("../nodemailer");

const grantAccess = function (action, resource) {
  return async (req, res, next) => {
    try {
      let actionOwn, actionAny;
      if (action.includes("read")) {
        actionOwn = "readOwn";
        actionAny = "readAny";
      } else if (action.includes("update")) {
        actionOwn = "updateOwn";
        actionAny = "updateAny";
      } else if (action.includes("delete")) {
        actionOwn = "deleteOwn";
        actionAny = "deleteAny";
      }
      const permission =
        String(req.user._id) === req.params.userId
          ? roles.can(req.user.role)[actionOwn](resource)
          : roles.can(req.user.role)[actionAny](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

const allowIfLoggedin = async (req, res, next) => {
  try {
    const user = res.locals.loggedInUser;
    if (!user)
      return res.status(401).json({
        error: "You need to be logged in to access this route",
      });
    req.user = await User.findById(user._id);
    next();
  } catch (error) {
    next(error);
  }
};

const register = async (req, res) => {
  try {
    await registerValidation(req.body);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
  try {
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist)
      return res.status(400).send({
        message: "email is already registered.",
      });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
  const url = req.protocol + "://" + req.get("host") + req.originalUrl;
  const { name, email, password, role } = req.body;
  const token = jwt.sign({ email: req.body.email }, process.env.TOKEN_SECRET);
  const user = new User({
    name,
    email,
    password: password,
    role: role || "basic",
    confirmationCode: token,
  });
  try {
    const savedUser = await user.save();
    const { name, email, confirmationCode } = savedUser;
    nodemailer.sendConfirmationEmail(name, email, confirmationCode, url);
    res.status(200).send({
      message: "User was registered successfully! Please check your email",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err });
  }
};

const login = async (req, res) => {
  try {
    await loginValidation(req.body);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).send({ message: "email or password is wrong." });
    const validPass = await user.comparePassword(password);
    if (!validPass)
      return res.status(400).send({ message: "email or password is wrong." });
    if (user.status !== "Active")
      return res
        .status(401)
        .send({ message: "Pending Account. Please Verify Your Email!" });
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .set({
        "Access-Control-Expose-Headers": "Authorization",
        Authorization: `Bearer ${token}`,
      })
      .send({ data: user, message: `${user.email} logged in.` });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const getUsers = async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    data: users,
  });
};

const getUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) return res.status(404).send("User does not exist");
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    await updateValidation(req.body);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
  try {
    const update = req.body;
    const userId = req.params.userId;
    if (update?.password) {
      const user = await User.findById(userId);
      const { old_password } = update;
      const validPass = await user.comparePassword(old_password);
      if (!validPass)
        return res.status(400).send({ message: "password is wrong." });
    }
    await User.findByIdAndUpdate(userId, update);
    const user = await User.findById(userId);
    res.status(200).json({
      data: user,
      message: update?.password
        ? "密碼已更新，請重新登入"
        : "User has been updated",
    });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).send("User does not exist");
    await User.findByIdAndDelete(userId);
    res.status(200).json({
      data: null,
      message: "User has been deleted",
    });
  } catch (error) {
    next(error);
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      confirmationCode: req.params.confirmationCode,
    });
    if (!user) return res.status(404).send({ message: "User Not found." });

    await user.updateOne({ status: "Active" });
    res.status(200).send("email confirm.");
  } catch (err) {
    console.log("error", err);
    res.status(500).send({ message: err });
  }
};

const sendConfirmationEmail = async (req, res) => {
  const url = req.protocol + "://" + req.get("host") + "/users/register";
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(404).send({ message: "User Not found." });
  const { name, confirmationCode } = user;
  try {
    nodemailer.sendConfirmationEmail(name, email, confirmationCode, url);
    res.status(200).send({ message: "An email has been sent" });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  grantAccess,
  allowIfLoggedin,
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  verifyUser,
  sendConfirmationEmail,
};
