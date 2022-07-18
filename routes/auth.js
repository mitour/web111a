const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/register", userController.register);

router.post("/login", userController.login);

// router.get("/", verify, (req, res) => {
//   res.status(200).send(`This is user ${req.user._id} information page`);
// });
module.exports = router;
