var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

});

socket.on('disconnect', function(){
  console.log('disconnect from server');
});

socket.on('newMessage', (message)=>{
  console.log('New Message: ', message);
});
