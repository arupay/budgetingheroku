//Dependencies

const app = require("./app.js");
// const transactions = require("./models/transactions");

require("dotenv").config();

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Middleware
//___________________

// returns middleware that only parses JSON

// this allows any app/site from anywhere access your API. This is a great way to start to get things up and running. Later, add restrictions, as needed.

// Routes

// app.get("/transactions", (req, res) => {
//   res.json(transactions);
// });

// app.get("/transactions/:id", (req, res) => {
//   res.json(transactions[req.params.id]);
// });

//Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));
