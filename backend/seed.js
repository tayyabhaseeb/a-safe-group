const pool = require("./db/connection");
const jokes = require("./jokes.json");

async function seed() {
  try {
    await pool.query("DELETE FROM jokes");
    const query =
      "INSERT INTO jokes (type, setup, punchline) VALUES ($1, $2, $3)";

    for (const joke of jokes) {
      await pool.query(query, [joke.type, joke.setup, joke.punchline]);
    }

    console.log("Jokes inserted!");
    process.exit();
  } catch (err) {
    console.error("Error seeding:", err);
    process.exit(1);
  }
}

seed();
