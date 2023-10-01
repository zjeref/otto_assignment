require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const userRoutes = require("./routes/user-routes");

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

// Other app configurations

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`${PORT}`));
