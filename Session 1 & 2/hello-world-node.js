
const http = require("http");

const serverCB = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World from NodeJS");
};

// Create NodeJS server
http.createServer(serverCB).listen(8000, 'localhost');

console.log("Server is listening at port : 8000");
