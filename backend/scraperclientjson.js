const net = require('net');
const jsonSocket = require('json-socket');
const port = 443;
const host = '35.221.43.110';

search = async function(searchTerm, callback){
  let socket = new jsonSocket(new net.Socket());
  socket.connect(port, host);
  socket.on('connect', function(){
    socket.sendMessage(searchTerm);
    socket.on('message', function(message){
      callback(message);
    });
  });
};
module.exports.search = search;
