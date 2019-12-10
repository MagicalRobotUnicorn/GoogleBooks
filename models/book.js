const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    _id: String,
    title : String,
    authors : String,
    description: String,
    image: String,
    link : String
});

module.exports = mongoose.model('Book', bookSchema);