const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const {
  registerValidation,
  loginValidation,
  updateValidation,
} = require("../validation");
const { roles } = require("../roles");
const nodemailer = require("../nodemailer.config");

grantAccess = function (action, resource) {
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

allowIfLoggedin = async (req, res, next) => {
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

register = async (req, res) => {
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
    nodemailer.sendConfirmationEmail(
      savedUser.name,
      savedUser.email,
      savedUser.confirmationCode,
      url
    );
    res.status(200).send({
      message: "User was registered successfully! Please check your email",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err });
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
    const validPass = await user.comparePassword(password);
    if (!validPass) return res.status(400).send("email or password is wrong.");
    if (user.status !== "Active")
      return res.status(401).send("Pending Account. Please Verify Your Email!");
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

getUsers = async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    data: users,
  });
};

getUser = async (req, res, next) => {
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

updateUser = async (req, res, next) => {
  try {
    await updateValidation(req.body);
  } catch (err) {
    return res.status(400).send(err.message);
  }
  try {
    const update = req.body;
    const userId = req.params.userId;
    await User.findByIdAndUpdate(userId, update);
    const user = await User.findById(userId);
    res.status(200).json({
      data: user,
      message: "User has been updated",
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

deleteUser = async (req, res, next) => {
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

verifyUser = async (req, res, next) => {
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
};
