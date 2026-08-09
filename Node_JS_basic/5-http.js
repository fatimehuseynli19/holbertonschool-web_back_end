const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
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
        res.end(output);
      })
      .catch((error) => {
        console.log = originalLog;
        output += error.message;
        res.end(output);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(1245);

module.exports = app;
