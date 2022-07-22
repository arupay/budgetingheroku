const express = require("express");
const router = express.Router();
const transArr = require("../models/transactions");

//Show All Transactions
router.get("/", (req, res) => {
  res.json(transArr);
});

//Show Transcation by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transArr[id]) {
    res.json(transArr[req.params.id]);
  } else {
    res.status(404).redirect("/Error");
  }
});

//Delete transaction by ID
router.delete("/:id", (req, res) => {
  const deleted = transArr.splice(req.params.id, 1);
  res.status(200).json(deleted);
});

//Create new transaction
router.post("/", (req, res) => {
  transArr.push(req.body);
  res.json(transArr[transArr.length - 1]);
});

//Update transaction by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedTrans = req.body;
  transArr[id] = updatedTrans;
  res.send(transArr[id]);
});

module.exports = router;
