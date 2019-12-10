const express = require("express");
const router = express.Router();
const axios = require("axios");
const $ = require("cheerio");


// Mongoose connection and databases schema
const mongoose = require("mongoose");
const Comment = require('../models/comment');
const Book = require('../models/article');


const bookSchema = mongoose.Schema({
  _id: String,
  title : String,
  authors : String,
  description: String,
  image: String,
  link : String
});