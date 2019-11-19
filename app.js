const net = require('net');
const port = 3000;
const host = 'localhost';
const scraper = require('amazon-buddy');

const server = net.createServer();
server.listen(port, host, () => {
  console.log("Server running on port " + port);
});

let sockets = [];

server.on('connection', function(sock){
  console.log('connected: ' + sock.remoteAddress + ':' + sock.remotePort);
  sockets.push(sock);
  let products = '';
  sock.on('data', function(data){
    (async() => {
      try{
        products = await scraper.products({keyword: data, number: 10, save: false });
        sockets.forEach(function(sock, index, array){
          sock.write(JSON.stringify(products));
        });
      }catch(error){
        sockets.forEach(function(sock, index, array){
          sock.write('error');
        });
      }
    })()
    sockets.forEach(function(sock, index, array){
      sock.write(products);
    });
  });
  sock.on('close', function(data){
    let index = sockets.findIndex(function(o){
      return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
    })
    if (index !== -1) sockets.splice(index, 1);
    console.log('closed: ' + sock.remoteAddress + ' ' + sock.remotePort);
  });
});
