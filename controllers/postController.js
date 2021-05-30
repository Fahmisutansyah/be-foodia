const { Post } = require("../models");

class PostController {
  static create(req, res) {
    let decoded = req.decoded;
    let newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      image: req.imageUrl,
      ownerId: decoded.id,
    });
    newPost
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

module.exports = PostController;
