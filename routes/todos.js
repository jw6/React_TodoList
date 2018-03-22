const express = require('express');
const router = express.Router();
const db = require('../models/database');

router.get('/', function(req, res) {
  db.Todo.find()
    .then(function(todos) {
      res.json(todos)
    })
    .catch(function(err) {
      res.send(err);
    })
});

router.post('/', function(req, res){
  // mongoose create will create the json object
  // since body-parser has done the work
  db.Todo.create(req.body)
    .then(function(newTodo){
      res.json(newTodo);
    })
    .catch(function(err){
      res.send(err);
    })
});

router.get('/:todoId', function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo)
    })
    .catch(function(err){
      res.send(err);
    })
});

module.exports = router;