const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(403).send("Access denied.");
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      res.locals.loggedInUser = verified;
      next();
    } catch (err) {
      res.status(401).send("invalid token.");
    }
  } else {
    next();
  }
};
