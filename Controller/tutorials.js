const express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

const router = new express.Router();
router.use(express.json());

// todo: Get-All
router.get('/',  async (req, res) => {
    try {
        res.send("hello i am Get all Tutorials")
        console.log("hello i am Get all Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Get all Tutorials error");
    }
})


// todo: Get-One byid
router.get('/byid/:id', urlencodedParser,async (req, res)=>{
    try {
        res.send("hello i am Get one byid Tutorials")
        console.log("hello i am Get one byid Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Get one byid Tutorials error");
    }
})

// todo: Get-One
router.get('/byphone/:id', urlencodedParser,async (req, res)=>{
    try {
        res.send("hello i am Get one byphone Tutorials")
        console.log("hello i am Get one byphone Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Get one byphone Tutorials error");
    }
})

// todo: Update
router.put('/:id', urlencodedParser,async (req, res)=>{
    try {
        res.send("hello i am Update one Tutorials")
        console.log("hello i am Update one Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Update one Tutorials error");
    }
})

// todo: Create
router.post('/', urlencodedParser, async (req, res)=>{
    try {
        res.send("hello i am Create Tutorials")
        console.log("hello i am Create Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Create Tutorials error");
    }
})

// todo: Delete All
router.delete('/', urlencodedParser, async (req, res)=>{
    try {
        res.send("hello i am Delete All Tutorials")
        console.log("hello i am Delete All Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Delete All Tutorials error");
    }
})

// todo: Delete One
router.delete('/:id', urlencodedParser, async (req, res)=>{
    try {
        res.send("hello i am Delete One Tutorials")
        console.log("hello i am Delete One Tutorials");
    } catch (e) {
        res.send(e)
        console.log("hello i am Delete One Tutorials error");
    }
})

module.exports = router;