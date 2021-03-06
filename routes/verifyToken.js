const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(400).send("Access denied");
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.verified = verified;
    next();
  } catch (err) {
    res.send("Access denied");
  }
};

module.exports = verifyToken;
