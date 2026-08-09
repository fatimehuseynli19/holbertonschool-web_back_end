const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let output = 'This is the list of our students\n';

  const originalLog = console.log;
  const logs = [];
  console.log = (msg) => {
    logs.push(msg);
  };

  countStudents(databasePath)
    .then(() => {
      console.log = originalLog;
      output += logs.join('\n');
      res.send(output);
    })
    .catch((error) => {
      console.log = originalLog;
      output += error.message;
      res.send(output);
    });
});

app.listen(1245);

module.exports = app;
