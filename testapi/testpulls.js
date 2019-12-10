const axios = require('axios');
const keys = require('./config/keys.js');

axios.get('https://www.googleapis.com/books/v1/volumes?q=Harry Potter&key=' + keys.key)
.then((response) => {
  let bookData = response.data.items.slice(0, 15);

  let rawData = (bookData[0]);

  const sampleItem = {
    id: rawData.id,
    title : rawData.volumeInfo.title,
    authors : rawData.volumeInfo.authors,
    description: rawData.volumeInfo.description,
    image: rawData.volumeInfo.imageLinks.thumbnail,
    link : rawData.volumeInfo.infoLink
  }

  console.log(sampleItem);
});