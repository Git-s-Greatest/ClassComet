const express = require('express');
const {convert} = require('html-to-text');
const app = express();

//this is our db object
var database = [
  "ID: 1, Nathan Goshay, Fullstack",
  "ID: 2, Cody Hanes, Fullstack",
  "ID: 3, Michelle Gamba, Fullstack",
  "ID: 4, Joshua Cervantes, Backend"
]
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

//html to text example using npm package
const html = '<html><body><h1>Example using html-to-text converter</h1></body></html>';
app.get('/exampleHTML', function(req, res) {
  res.send(html);
  const text = convert(html, {
    wordwrap: 100
  });
  console.log(text);
});

app.get('/hi', (req, res) => {
  res.send('hi :)')
});

app.get('/testReturn', (req, res) => {
  res.send('This is a test')
});

app.get('/:getRecord', (req, res) => {
  var index = parseInt(req.params.getRecord) - 1;
  res.send(database[index]);
});

app.get('/name/:name', function(req, res) {
  res.send('<html><body><h1>Welcome '
    + req.params.name + '</h1></body></html>');
});
