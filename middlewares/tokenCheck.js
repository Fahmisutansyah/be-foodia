const { decodeJWT } = require("../helper/authentication");

const verifyToken = (req, res, next) => {
  try {
    let decode = decodeJWT(req.headers.token);
    req.decoded = decode;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "you are not authorized",
    });
  }
};

module.exports = verifyToken;
