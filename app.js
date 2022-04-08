var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");
require("dotenv").config();

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

const mongoose = require("mongoose");
const config = require("./config/config.json");

console.log(config["development"].mongo_uri);

/** Setup Mongo-session store */
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
// const env = process.env.PORT;
const env = require("dotenv").config();

const myStore = new MongoDBStore({
  databaseName: "test",
  uri: config["development"].mongo_uri, //database host
  collection: "sessions", //table name
});

app.set("trust proxy", 1);
app.use(
  session({
    secret: config["development"].session.secret,
    resave: false,
    saveUninitialized: true,
    store: myStore,
    cookie: {
      secure: true,
      maxAge: config["development"].session.expiration,
      httpOnly: false,
      secure: false,
    },
  })
);

/** routes define here */
var todoRoute = require("./route/v1/todoRoute");
var authRoute = require("./route/v1/authRoute");
var authenticateUser = require("./controllers/authenticateUser");

app.use("/v1/todo", authenticateUser, todoRoute);
app.use("/v1/user", authRoute);

/** */
app.use(function (req, res, next) {
  var err = new Error("Not found");
  err.status = 404;
  next(err);
});

/** Setup mongodb connection.. */
mongoose.connect(config["development"].mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000);

const db = mongoose.connection;
db.on("error", (error) => {
  console.log("Connection err ::" + error);
});

db.once("open", (success) => {
  console.log("Connection established success..");
});

module.exports = app;
