const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');

const { add, subtract, multiply } = require('./lib/numbers');

const app = express();
app.use(express.json());

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


// numbers endpoints
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {

  const { a, b } = req.body;
  if (a === undefined || b === undefined ) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
    
  } else if (isNaN(a) || isNaN(b)){
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } 

  res.status(200).json({ result: multiply(a,b) });
});



module.exports = app;
