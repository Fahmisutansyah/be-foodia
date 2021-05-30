const { User } = require("../models");
const {
  generateJWT,
  compareHash,
  decodeJWT,
} = require("../helper/authentication");

class UserController {
  static create(req, res) {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    newUser
      .save()
      .then((created) => {
        res.status(201).json(created);
      })
      .catch((err) => {
        res.status(500).json({
          msg: err.message,
        });
      });
  }

  static readOne(req, res) {
    User.findById(req.query.id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({
          msg: err.message,
        });
      });
  }

  static login(req, res) {
    User.findOne({
      email: req.body.email,
    })
      .then((user) => {
        if (user) {
          let check = compareHash(req.body.password, user.password);
          if (check) {
            let token = generateJWT({
              email: user.email,
              id: user._id,
            });
            res.status(201).json({
              token: token,
            });
          } else {
            res.status(400).json({
              msg: `Invalid email/password`,
            });
          }
        } else {
          res.status(400).json({
            msg: `Invalid email/password`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          msg: err.message,
        });
      });
  }
  static getPayload(req, res) {
    let decode = decodeJWT(req.headers.token);
    User.findOne({
      _id: decode.id,
    })
      .select(["-password"])
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({
          msg: err.message,
        });
      });
  }
}

module.exports = UserController;
