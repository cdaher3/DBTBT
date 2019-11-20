const net = require('net');
const jsonSocket = require('json-socket');
const scraper = require('amazon-buddy');
const port = 3000;

let server = net.createServer();
server.listen(port);
console.log("listening on port " + port);
server.on('connection', function(socket) {
  console.log("Connected by " + socket);
  socket = new jsonSocket(socket);
  socket.on('message', function(message){
    (async() => {
      try{
        products = await scraper.products({keyword: message, number: 10, save: false });
        socket.sendEndMessage(products);
      }catch(error){
        socket.sendEndMessage('error');
      }
    })()
  });
});
