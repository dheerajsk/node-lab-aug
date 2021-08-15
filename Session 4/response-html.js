
const http = require("http");

// Create NodeJS server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Hello World from NodeJS</h1>");
}).listen(8000, 'localhost');

console.log("Server is listening at port : 8000");
