const route = require("express").Router();
const { PostController } = require("../controllers");
const verifyToken = require("../middlewares/tokenCheck");
const { uploadImgur } = require("../middlewares/uploadImgur");
route.post("/", verifyToken, uploadImgur, PostController.create);

module.exports = route;
