const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const port = 3000;

// for the future deployment with Heroku
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('HI FROM THE ROOT ROUTES');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
  console.log("App is running port " + port);
})