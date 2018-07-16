const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT | 3000;

var app = express();
app.get('/', function(req,res){
  res.send('fsdfsdfsafd');
});
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New User connected');

  socket.emit('newMessage', generateMessage("Admin", "Welcome to Chat App"));

  socket.broadcast.emit('newMessage', generateMessage("Admin", "New User joined"));

  socket.on('createMessage', (message)=>{
    console.log('Message: ', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });
});

server.listen(port, () =>{
  console.log(`Server is up on port ${port} `);
});
