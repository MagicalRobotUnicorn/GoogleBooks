console.log("Keys.js is loaded");
const dotenv = require("dotenv").config()

module.exports = {
  google: process.env.GOOGLE_BOOKS_KEY,
  database: process.env.LOCAL_DATABASE_CONNECTION
}