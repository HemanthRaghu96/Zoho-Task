// Import necessary modules

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const itemRouter = require("./routes/item");


const app = express();
const port = process.env.PORT;
const DB = process.env.DATABASE;

//Database connection

const DBConnection = async () => {
  try {
    await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB Connected");
  } catch (err) {
    console.log("Error", err.message);
  }
};
DBConnection();

// Middleware setup

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use("/", userRouter);
app.use("/", itemRouter);

// Define a route for the root URL

app.get("/", (req, res) => {
  res.status(201).send("Zoho Test");
});

// Start the server and listen on the specified port

app.listen(port, () => {
  console.log(`Server started at: ${port}`);
});
