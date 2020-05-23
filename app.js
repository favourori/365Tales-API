let express = require("express");
let app = express();

require("dotenv").config();
const mongoose = require("mongoose");
//cors
let cors = require("cors");

//app.use(cors);

//allowing cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Body Middlewares here
let bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routing

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Tales Cafe API v.1.0.0",
  });
});

//import routes
const readerRoute = require("./routes/reader")

//using routes

app.use("/api/reader", readerRoute)

//server
let PORT = process.env.PORT || 3000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
