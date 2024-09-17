/**
 * 4-http.js - Simple HTTP Server
 * 
 * This script creates a basic HTTP server using Node.js http module.
 * The server responds with 'Hello Holberton School!' for all routes.
 */

const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

// Create HTTP server and define response
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
