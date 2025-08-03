const db = require("../db/connection");

async function getJokeCount() {
  const count = await db.query("SELECT COUNT(*) FROM jokes");
  return parseInt(count.rows[0].count);
}

async function getRandomJoke(offset) {
  const result = await db.query("SELECT * FROM jokes OFFSET $1 LIMIT 1", [
    offset,
  ]);
  return result.rows[0];
}

module.exports = { getJokeCount, getRandomJoke };
