const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter } = require('./lib/strings');

const app = express();

// strings endpoints
// app.get('/strings/hello/world', (req, res) => {
//   res.status(200).json({ result: 'Hello, world!' });
// });

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});



module.exports = app;
