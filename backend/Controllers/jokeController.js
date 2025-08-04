const { getJokeCount, getRandomJoke } = require("../Models/jokeModel");
const { CustomError } = require("../errors/CustomError");

async function fetchRandomJoke(req, res, next) {
  try {
    const count = await getJokeCount();
    if (count === 0) {
      throw new CustomError("No jokes found in the database", 404);
    }

    const offset = Math.floor(Math.random() * count);
    const joke = await getRandomJoke(offset);

    if (!joke) {
      throw new CustomError("Could not get any joke", 500);
    }

    res.status(200).json(joke);
  } catch (err) {
    next(err);
  }
}

module.exports = { fetchRandomJoke };
