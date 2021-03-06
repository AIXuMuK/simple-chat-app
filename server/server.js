const app = require('express')();
const server = require('http').createServer(app);

const io = require("socket.io")(server, {
    cors: {origin: "*"}
  });

const PORT = 4000;

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    res.send();
});

io.on('connection', socket => {
    console.log('user connected', socket.id);
});

server.listen(PORT, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log(`Server running at http://localhost:${PORT}/`);
});