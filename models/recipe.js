const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let recipeScheme = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
    },
    thumbail: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

let Recipe = mongoose.model("Recipe", recipeScheme);

module.exports = Recipe;
