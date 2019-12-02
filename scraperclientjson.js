const net = require('net');
const jsonSocket = require('json-socket');
const port = 443;
const host = '35.221.43.110';

let socket = new jsonSocket(new net.Socket());

search = async function(searchTerm, callback){
  socket.connect(port, host);
  socket.on('connect', function(){
    socket.sendMessage(searchTerm);
    socket.on('message', function(message){
      callback(message);
    });
  });
};
module.exports.search = search;
