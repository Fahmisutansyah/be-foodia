const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const constants = require("./lib/util");

mongoose.connect(
  `mongodb+srv://${constants.db.USER}:${constants.db.PASS}@foodia-cluster.7noij.mongodb.net/${constants.db.NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connect succesfully to DB");
});

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(constants.port, () => {
  console.log(`server is running at port: ` + constants.port);
});
