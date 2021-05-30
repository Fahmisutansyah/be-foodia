const route = require("express").Router();
const { UserController } = require("../controllers");
route.post("/", UserController.create);
route.post("/login", UserController.login);

module.exports = route;
