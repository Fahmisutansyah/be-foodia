const { Recipe } = require("../models");

class RecipeController {
  static create(req, res) {
    let decoded = req.decoded;
    let newRecipe = new Recipe({
      title: req.body.title,
      detail: req.body.detail,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      image: req.imageUrl,
      thumbnail: req.thumbnailUrl,
      ownerId: decoded.id,
    });
    newRecipe
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
}

module.exports = RecipeController;
