const express = require('express');
const app = express();
const port = 3030;
const db = require('./db/connection');

app.get('/', (req, res) => {
  db.query('SELECT * FROM test_table', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
