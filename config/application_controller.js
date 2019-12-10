// Sample object from testPull
// let bookData = response.data.items.slice(0, 15);

// let rawData = (bookData[0]);

// const sampleItem = {
//   id: rawData.id,
//   title : rawData.volumeInfo.title,
//   authors : rawData.volumeInfo.authors,
//   description: rawData.volumeInfo.description,
//   image: rawData.volumeInfo.imageLinks.thumbnail,
//   link : rawData.volumeInfo.infoLink
// }

// console.log(sampleItem);

const express = require("express");
const router = express.Router();
const axios = require("axios");
const $ = require("cheerio");

//Book and Api routes
const google_books = require("../config/keys");
 
const mongoose = require("mongoose");
const Book = require('../models/book');

router.post("/api/:book", function(req, res){
  const book = new Book({
      _id: new mongoose.Types.ObjectId(),
// Insert Book Schema Here
  });
  book
  .save()
  .then(result => {
      // console.log(result);
  })
  .catch(err => console.log(err));

  res.status(201).json({
      message: "Handling POST requests to /api/book/:book",
      createdBook: book
  });
});

router.get("/api/bookCollection", function(req, res){
  // console.log(req.body);
  const id = req.params.article;
  // Return all articles in mongo
});

router.get("/api/:articleId", (req, res, next) => {
  const id = req.params.articleId;
  Comment.find({articleId: id})
  .exec()
  .then(doc => {
      res.status(200).json(doc);
  })
  .catch(err => {
      res.status(500).json({error: err});
});
});