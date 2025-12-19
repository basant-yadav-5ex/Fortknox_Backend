const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello Fortknox user");
});

const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
  console.log(`Server running on port: ${serverPort}`);
});

