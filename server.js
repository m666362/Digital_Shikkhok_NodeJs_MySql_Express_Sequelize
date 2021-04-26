var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tutorialRouter = require("./Controller/tutorials")
const userRouter = require("./Controller/users")

var app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// router
app.use("/tutorials", tutorialRouter);
app.use("/users", userRouter);

const db = require("./Models");
const router = require("./Controller/tutorials");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs MySql Server." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
