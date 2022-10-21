var express = require('express');
var router = express.Router();

const mysql = require("mysql2");

router.get("/", function(req,res){
    res.send("hej")
})

module.exports = router;
