const express = require("express");
var bodyParser = require("body-parser");
const tutorialController = require("./../Controllers/tutorialController");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const db = require("../Models");
const Model = db.tutorials;
const Op = db.Sequelize.Op;

const router = new express.Router();
router.use(express.json());

function responder(res, status, error, data) {
  if (error || !data) {
    res.status(status).send({ error, data });
    console.log("Error", error, data);
  } else {
    res.status(status).send(data);
    console.log("Successfull", data);
  }
}

// todo: Get-All
router.get("/", async (req, res) => {
  tutorialController.getAllData((status, data, error) => {
    responder(res, status, error, data);
  });
});

// todo: Get-One byphone
router.get("/byphone/:phone_number", urlencodedParser, async (req, res) => {
  tutorialController.findOne(req.params.phone_number, (status, data, error) => {
    responder(res, status, error, data);
  });
});

// todo: Get-One byId
router.get("/byid/:id", urlencodedParser, async (req, res) => {
  tutorialController.findOne(req.params.id, (status, data, error) => {
    responder(res, status, error, data);
  });
});

// todo: Update
router.put("/:id", urlencodedParser, async (req, res) => {
  const updates = req.body;
  tutorialController.updateOne(req.params.id, updates,(status, data, error) => {
    responder(res, status, error, data);
  }); 
});

// todo: Create
router.post("/", urlencodedParser, (req, res) => {
  tutorialController.create(req, (status, data, error) => {
    responder(res, status, error, data);
  });
});

// todo: Delete All
router.delete("/", urlencodedParser, async (req, res) => {
  try {
    res.send("hello i am Delete All Tutorials");
    console.log("hello i am Delete All Tutorials");
  } catch (e) {
    res.send(e);
    console.log("hello i am Delete All Tutorials error");
  }
});

// todo: Delete One
router.delete("/:id", urlencodedParser, (req, res) => {
  tutorialController.deleteOne(req.params.id, (status, data, error) => {
    responder(res, status, error, data);
  });
});

// todo: Delete Many
router.delete("/:id", urlencodedParser, (req, res) => {
  tutorialController.deleteOne(req.params.id, (status, data, error) => {
    responder(res, status, error, data);
  });
});

module.exports = router;
