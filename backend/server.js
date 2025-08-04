const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./Routers/jokeRoutes");
const { customErrorHandler } = require("./errors/errors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/api", jokeRoutes);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

app.use((req, res, next) => {
  res.status(404).json({ msg: "Not found" });
});

app.use(customErrorHandler);

module.exports = app;
