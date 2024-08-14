require("dotenv").config();
const express = require("express");
const connectDB =require('../src/config/database')

const app = express();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
app.use(express.json());

app.use("/", (req, res) => {
  res.send("This is home route");
});

app.listen(PORT, async () => {
  try {
    await connectDB(DB_URL);
    console.log(`Server is Connected at PORT :${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
