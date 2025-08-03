const { getJokeCount, getRandomJoke } = require("../Models/jokeModel");

async function fetchRandomJoke(req, res) {
  try {
    const count = await getJokeCount();
    const offset = Math.floor(Math.random() * count);
    const joke = await getRandomJoke(offset);
    res.json(joke);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch joke" });
  }
}

module.exports = { fetchRandomJoke };
