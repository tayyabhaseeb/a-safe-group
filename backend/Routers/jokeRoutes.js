const express = require("express");
const { fetchRandomJoke } = require("../Controllers/jokeController");

const router = express.Router();

router.get("/joke", fetchRandomJoke);

module.exports = router;
