const express = require("express");

require('dotenv').config();
const keys = require('../config/keys');

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
const apiRouter = require('./routes/api');

app.use('/api/', apiRouter);

// Constant for Local Database Connection
// const uri = keys.database;
const uri = 'mongodb://127.0.0.1:27017/';

// This is where we start our connection
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });


// Connection for Mongoose
const connection = mongoose.connection;

// Connect to the Mongo DB
mongoose.connect(
  keys.database || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


// Establish connection to the database
connection.once('open', () => {
  console.log("MongoDB database up...");
});

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
