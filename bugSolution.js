const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'index.html'));
  } catch (err) {
    console.error(err);
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});