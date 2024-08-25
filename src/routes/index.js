const express = require("express");
const router = express.Router();

// called todos model 

const {Todos} = require("../database/models/todos");

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todos.findAll();
    res.status(200).json(todos);  
  } catch (error) {
    console.error('Error fetching todos:', error);  
    res.status(500).json({ message: 'An error occurred while fetching todos.' }); 
  }
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