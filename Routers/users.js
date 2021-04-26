const express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

const router = new express.Router();
router.use(express.json());

// todo: Get-All
router.get('/',  async (req, res) => {
    try {
        res.send("hello i am Get all Users")
        console.log("hello i am Get all Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Get all Users error");
    }
})


// todo: Get-One byid
router.get('/byid/:id', urlencodedParser,async (req, res)=>{
    try {
        res.send("hello i am Get one byid Users")
        console.log("hello i am Get one byid Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Get one byid Users error");
    }
})

// todo: Get-One
router.get('/byemail/:id', urlencodedParser,async (req, res)=>{
    try {
        res.send("hello i am Get one byemail Users")
        console.log("hello i am Get one byemail Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Get one byemail Users error");
    }
})

// todo: Update
router.put('/:id', urlencodedParser,async (req, res)=>{
    try {
        res.send("hello i am Update one Users")
        console.log("hello i am Update one Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Update one Users error");
    }
})

// todo: Create
router.post('/', urlencodedParser, async (req, res)=>{
    try {
        res.send("hello i am Create Users")
        console.log("hello i am Create Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Create Users error");
    }
})

// todo: Delete All
router.delete('/', urlencodedParser, async (req, res)=>{
    try {
        res.send("hello i am Delete All Users")
        console.log("hello i am Delete All Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Delete All Users error");
    }
})

// todo: Delete One
router.delete('/:id', urlencodedParser, async (req, res)=>{
    try {
        res.send("hello i am Delete One Users")
        console.log("hello i am Delete One Users");
    } catch (e) {
        res.send(e)
        console.log("hello i am Delete One Users error");
    }
})

module.exports = router;