const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
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

let Post = mongoose.model("Post", postSchema);

module.exports = Post;
