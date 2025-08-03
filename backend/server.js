const express = require("express");
const pool = require("./db/connection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/joke", async (req, res) => {
  try {
    const countRes = await pool.query("SELECT COUNT(*) FROM jokes");
    const count = parseInt(countRes.rows[0].count);
    const offset = Math.floor(Math.random() * count);
    const jokeRes = await pool.query("SELECT * FROM jokes OFFSET $1 LIMIT 1", [
      offset,
    ]);

    res.json(jokeRes.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
