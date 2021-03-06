var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tutorialRouter = require("./Routers/tutorials");
const userRouter = require("./Routers/users");
const studentRouter = require("./Routers/students");

const teacherRouter = require("./Routers/teachers");
const subjectRouter = require("./Routers/subjects");
const institutionRouter = require("./Routers/institutions");
const gradeLevelRouter = require("./Routers/gradeLevels");

var app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// router
app.use("/tutorials", tutorialRouter);
app.use("/users", userRouter);
app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);
app.use("/subjects", subjectRouter);
app.use("/institutions", institutionRouter);
app.use("/gradeLevels", gradeLevelRouter);

const db = require("./Models");
db.sequelize.sync();
//{ force: true }

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs MySql Server." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
