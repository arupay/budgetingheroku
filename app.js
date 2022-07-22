const express = require("express");
const transactionController = require("./controllers/transactions.controllers");
const cors = require("cors");

//config
const app = express();

//CORS 
app.use(cors());

app.use(express.json()); // Parse incoming JSON

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/transactions", transactionController);

app.use("*", (req, res) => {
  res.status(404).send("oops nothing to see here");
});

//export
module.exports = app;
