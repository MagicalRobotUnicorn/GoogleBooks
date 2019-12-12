const db = require("../models");
const API_KEY = require("../config/keys");
const axios = require("axios");

module.export = {
  findAll: function (req, res) {
    db.Book.find(req, res)
      .then(dbBooks => res.json(dbBooks))
      .catch(err => res.status(402).json(err))
  },

  findGoogle: function (req, res) {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + req.query + '&key=' + API_KEY.key)
      .then(json => json.data.items.map(result => (
        {
          id: result.id,
          title : result.volumeInfo.title,
          authors : result.volumeInfo.authors,
          description : result.volumeInfo.description,
          image : result.volumeInfo.imageLinks.thumbnail,
          link : result.volumeInfo.infoLink
        })))
      .then(newData => this.setState({ Books: newData }))
      .catch(error => alert(error));
  }
}