const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT | 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New User connected');

  socket.emit('newMessage', {
    from: 'server',
    text: 'hehe',
    createdAt: 12547
  });

  socket.on('creatMessage', (message)=>{
    console.log('Message: ', message);
  });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });
});

server.listen(port, () =>{
  console.log(`Server is up on port ${port} `);
});
