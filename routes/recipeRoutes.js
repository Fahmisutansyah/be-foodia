const route = require("express").Router();
const { RecipeController } = require("../controllers");
const verifyToken = require("../middlewares/tokenCheck");
const { uploadImgur, uploadThumbnail } = require("../middlewares/uploadImgur");
route.post("/", verifyToken, uploadImgur, uploadThumbnail, RecipeController);

module.exports = route;
