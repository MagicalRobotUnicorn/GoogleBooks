const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const keys = require('./config/keys.js');

router.route("/book")
.get(booksController.findALl)
.post(booksController.create)

router.route("/google")
.get(booksController.findGoogle)



module.exports = router