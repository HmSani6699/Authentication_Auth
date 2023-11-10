const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/user_routers");

const app = express();
app.use(express.json());

app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://hmsadikurrahman120:AQqBJ3caQ2XoAXdD@cluster0.nydjikp.mongodb.net/Auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("Database is connected ! Listening Localhost to 5000");
  })
  .catch((error) => console.log(error));

// AQqBJ3caQ2XoAXdD
