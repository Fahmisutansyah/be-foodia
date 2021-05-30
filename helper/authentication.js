const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  hashPass(pass) {
    return bcrypt.hashSync(pass, 8);
  },
  generateJWT(obj) {
    console.log("generating JWT");
    return jwt.sign(
      { name: obj.name, email: obj.email, id: obj.id },
      process.env.JWT_KEY
    );
  },
  compareHash(pass, passDB) {
    console.log(passDB);
    return bcrypt.compareSync(pass, passDB);
  },
  decodeJWT(token) {
    try {
      return jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
