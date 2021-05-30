const axios = require("axios").default;

const uploadImgur = async (req, res, next) => {
  try {
    const image = { image: req.body.formData };
    const response = await axios.post("https://api.imgur.com/3/upload", image, {
      headers: { Authorization: `Client-ID ${process.env.IMGUR_CLIENTID}` },
    });
    console.log("uploaded post\n");
    console.log(response.data.data.link);
    req.imageUrl = response.data.data.link;
    next();
  } catch (err) {
    return res.status(500).json({
      message: err.response.data.message,
    });
  }
};

const uploadThumbnail = async (req, res, next) => {
  try {
    const image = { image: req.body.formDataThumbnail };
    const response = await axios.post("https://api.imgur.com/3/upload", image, {
      headers: { Authorization: `Client-ID ${process.env.IMGUR_CLIENTID}` },
    });
    console.log("uploaded thumbnail\n");
    console.log(response.data.data.link);
    req.thumbnailUrl = response.data.data.link;
    next();
  } catch (err) {
    return res.status(500).json({
      message: err.response.data.message,
    });
  }
};

module.exports = { uploadImgur, uploadThumbnail };
