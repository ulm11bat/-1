const express = require("express"),
  cors = require("cors");
const app = express();
require("dotenv").config()
const port = process.env.PORT || 8000;
const connect = require("./config/db");
const { playlistRoutes, songRoutes } = require("./routes");

app.use(cors());
app.use(express.json());

connect()

app.get("/", (req, res) => {
  res.send("Playlist Home");
});

app.use(playlistRoutes)
app.use(songRoutes)

app.listen(port, () => {
  console.log(`Created at: http://localhost:${port}`);
});
