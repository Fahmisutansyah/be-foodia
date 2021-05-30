const route = require("express").Router();

route.use("/users", require("./userRoutes"));
route.use("/posts", require("./postRoutes"));
route.use("/recipes", require("./recipeRoutes"));

module.exports = route;
