require("dotenv").config();

const db = {
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
  NAME: process.env.DB_NAME,
};

const port = 3000;

module.exports = {
  db,
  port,
};
