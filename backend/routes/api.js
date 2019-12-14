const router = require('express').Router();
const axios = require('axios');

let Book = require('../models/book');
const keys = require('../../config/keys.js');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const newBook = new Book({
    id: req.body.id,
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  });

  newBook.save()
  .then(() => res.json('Book added!'))
  .catch((err) => res.status(400).json('Error: ' + err));
  
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(() => res.json('Book deleted!'))
  .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/query/:info').get((req, res) => {
  axios.get('https://www.googleapis.com/books/v1/volumes?q=' + req.params.info + '&key=' + keys.google)
    .then((response) => {
      let bookData = response.data.items.slice(0, 15);

      let responseArray = [];

      responseArray.push(bookData.map(rawData => {
        return ({
          id: rawData.id,
          title: rawData.volumeInfo.title,
          authors: rawData.volumeInfo.authors,
          description: rawData.volumeInfo.description,
          image: rawData.volumeInfo.imageLinks.thumbnail,
          link: rawData.volumeInfo.infoLink
        });
      }));
      res.json(responseArray);
    }
    )
    .catch(err => { console.log('Error: ' + err) });
});

module.exports = router;

// router.route('/add').post((req, res) => {
//   const title = req.body.username;
//   const authors = req.body.description;
//   const description = req.body.duration;
//   const image = req.body.image;


// })