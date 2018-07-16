var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('creatMessage', {
    from: 'zubair',
    text: 'hey',

  });

});

socket.on('disconnect', function(){
  console.log('disconnect from server');
});

socket.on('newMessage', (message)=>{
  console.log('New Message: ', message);
});
