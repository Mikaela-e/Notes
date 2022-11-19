var express = require('express');
var router = express.Router();
var cors = require('cors');
const mysql = require("mysql2");

router.use(cors());

router.post("/", function(req,res){
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err)
    }
    let saveTitle = req.body.title
    let saveContent = req.body.textContent
    let sql = `INSERT INTO thenotes (title, content) VALUES (' ${saveTitle}', ' ${saveContent}')`
    req.app.locals.con.query(sql,function(err, result){
      if(err){
        console.log(err);
      }
      console.log("result", result);
    })
  res.send(result)
  })
})

router.get("/text", function(req,res){
  req.app.locals.con.connect(function(err){
    if(err){
      console.log(err)
    }
    let sql = `SELECT * FROM thenotes`
    req.app.locals.con.query(sql,function(err, result){
      if(err){
        console.log(err);
      }
      console.log("result", result);
      res.json(result)
    })
  })
})

router.post("/delete", (req, res) => {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }
    const userId = req.body.id;
    let sql = `DELETE FROM thenotes WHERE id="${userId}"`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        console.log(result)
      }

      res.json("Document deleted");
    });
  });
});
module.exports = router;
