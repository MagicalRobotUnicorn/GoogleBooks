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

// 
// const express = require("express");
// const router = express.Router();
// const bookcontroller = require("../../controllers/bookscontroller");

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')


//Book and Api routes
// const google_books = require("../config/keys");
 
// const mongoose = require("mongoose");
// const Book = require('../models/book');


require('dotenv').config();

 const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Replacement for body parser, included in express
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connection up...");
});

app.listen(PORT, () => {
  console.log('Server is running on PORT: ', PORT);
});


const app = express();
const PORT = process.env.PORT || 5000;

router.post("/api/:book", function(req, res){
  const book = new Book({
      _id: String,
      title : String,
      authors : String,
      description: String,
      image: String,
      link : String
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



