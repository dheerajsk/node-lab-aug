
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('client message', (msg) => {
        io.emit('server message', msg);
    })
})

http.listen(3000, () => {
    console.log("Listening on 3000")
})