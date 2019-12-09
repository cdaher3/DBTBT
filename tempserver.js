const net = require('net');
const jsonSocket = require('json-socket');
const fs = require('fs');
const port = 3000;

let goosedata = fs.readFileSync('goose.json');
let goose = JSON.parse(goosedata);

let server = net.createServer();
server.listen(port);
console.log("listening on port " + port + "; Honk");
server.on('connection', function(socket) {
  console.log("Connected by " + socket);
  socket = new jsonSocket(socket);
  socket.on('message', function(message){
    (async() => {
      try{
        socket.sendEndMessage(goose);
      }catch(error){
        socket.sendEndMessage('error');
      }
    })()
  });
});
