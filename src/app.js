const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate } = require('./lib/booleans');

const app = express();
app.use(express.json());

// STRINGS

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

// app.get('/strings/first-character/:string', (req, res) => {
//   res.json({ result: firstCharacter(req.params.string) });
// });

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.json({ result: firstCharacter(req.params.string) });
  }
});

// NUMBERS
// add
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: add(a, b) });
});

// subtract
app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: subtract(b, a) });
});

// multiply
app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  // console.log(a, Number.isNaN(a));
  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: multiply(a, b) });
});

// divide
app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  return res.status(200).json({ result: divide(a, b) });
});

// remainder
app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  return res.status(200).json({ result: remainder(a, b) });
});

// BOOLEANS
app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  return res.status(200).json({ result: negate(value) });
});
module.exports = app;
