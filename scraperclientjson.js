const net = require('net');
const jsonSocket = require('json-socket');
const port = 3000;
const host = 'localhost';

let socket = new jsonSocket(new net.Socket());
socket.connect(port, host);
socket.on('connect', function(){
  socket.sendMessage('carpet');
  socket.on('message', function(message){
    console.log(JSON.stringify(message));
  });
});
