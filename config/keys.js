console.log("Keys.js is loaded");
const dotenv = require("dotenv").config()

module.exports = {
  key: process.env.GOOGLE_BOOKS_KEY
}