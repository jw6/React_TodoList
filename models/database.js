const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connection('mongodb://localhost:37017/todolist');

// allows mongoose to use Promise syntax instead of callback functions
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
 