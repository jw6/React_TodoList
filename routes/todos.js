const express = require('express');
const router = express.Router();
const db = require('../models/database');
const helper = require('../helper/todos');

router.route('/')
  .get(helper.getTodos)
  .post(helper.createTodo);

router.route('/:todoId')
  .get(helper.getTodo)
  .put(helper.updateTodo)
  .delete(helper.deleteTodo);

module.exports = router;