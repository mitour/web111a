const router = require("express").Router();
const {
  register,
  login,
  allowIfLoggedin,
  grantAccess,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  verifyUser,
} = require("../controller/userController");

router.post("/register", register);

router.get("/register/:confirmationCode", verifyUser);

router.post("/login", login);

router.get(
  "/:userId",
  allowIfLoggedin,
  grantAccess("readOwn", "profile"),
  getUser
);

router.get("/", allowIfLoggedin, grantAccess("readAny", "profile"), getUsers);

router.put(
  "/:userId",
  allowIfLoggedin,
  grantAccess("updateOwn", "profile"),
  updateUser
);

router.delete(
  "/:userId",
  allowIfLoggedin,
  grantAccess("deleteAny", "profile"),
  deleteUser
);

module.exports = router;
