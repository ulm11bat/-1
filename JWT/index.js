const express = require("express"),
  cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;


app.use(cors())
app.use(express.json())



app.get("/", async (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
