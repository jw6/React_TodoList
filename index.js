const express = require('express');
const app = express();

// const port = 3000;

// for the future deployment with Heroku
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hi there from Express');
});

app.listen(port, function() {
  console.log("App is running port " + port);
})