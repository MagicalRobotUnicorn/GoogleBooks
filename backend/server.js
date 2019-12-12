const express = require("express");
const cors = require('cors');

const mongoose = require("mongoose");
const routes = require("../routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

// const express = require("express");
// //const router = express.Router();
// //const axios = require("axios");
// //const $ = require("cheerio");


// // Mongoose connection and databases schema
// const mongoose = require("mongoose");

// //const Comment = require('../models/comment');
// //const Book = require('../models/article');


// const bookSchema = mongoose.Schema({
//   _id: String,
//   title : String,
//   authors : String,
//   description: String,
//   image: String,
//   link : String
// });

// // Call the routes
// const route = require('./config/application_controller');
// const app = express();
// app.use(route)
