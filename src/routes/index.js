const express = require("express");

const router = express.Router();

router.get("/todos", (req, res) => {
 res.json({message:"todos are set"})
});

router.post("/todos", (req, res) => {
  console.log(req);
});

router.get("/todos/:id", (req, res) => {
  console.log(req);
});

router.put("/todos/:id", (req, res) => {
  console.log(req);
});


router.delete("/todos/:id", (req, res) => {
  console.log(req);
});


module.exports=router