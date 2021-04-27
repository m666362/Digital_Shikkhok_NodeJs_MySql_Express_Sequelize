const express = require("express");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const db = require("../Models");
const Model = db.users;
const Op = db.Sequelize.Op;

const router = new express.Router();
router.use(express.json());

// todo: Get-All
router.get("/", async (req, res) => {
  try {
    res.send("hello i am Get all Users");
    console.log("hello i am Get all Users");
  } catch (e) {
    res.send(e);
    console.log("hello i am Get all Users error");
  }
});

// todo: Get-One byid
router.get("/byid/:id", urlencodedParser, async (req, res) => {
  try {
    res.send("hello i am Get one byid Users");
    console.log("hello i am Get one byid Users");
  } catch (e) {
    res.send(e);
    console.log("hello i am Get one byid Users error");
  }
});

// todo: Get-One
router.get("/byphone/:id", urlencodedParser, async (req, res) => {
  try {
    res.send("hello i am Get one byphone Users");
    console.log("hello i am Get one byphone Users");
  } catch (e) {
    res.send(e);
    console.log("hello i am Get one byphone Users error");
  }
});

// todo: Update
router.put("/:id", urlencodedParser, async (req, res) => {
  try {
    res.send("hello i am Update one Users");
    console.log("hello i am Update one Users");
  } catch (e) {
    res.send(e);
    console.log("hello i am Update one Users error");
  }
});

// todo: Create
router.post("/", urlencodedParser, async (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const user = {
    name: req.body.name,
    email: req.body.email,
  };

  // Save Tutorial in the database
  Model.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
});

// todo: Delete All
router.delete("/", urlencodedParser, async (req, res) => {
  try {
    res.send("hello i am Delete All Users");
    console.log("hello i am Delete All Users");
  } catch (e) {
    res.send(e);
    console.log("hello i am Delete All Users error");
  }
});

// todo: Delete One
router.delete("/:id", urlencodedParser, async (req, res) => {
  try {
    res.send("hello i am Delete One Users");
    console.log("hello i am Delete One Users");
  } catch (e) {
    res.send(e);
    console.log("hello i am Delete One Users error");
  }
});

module.exports = router;
