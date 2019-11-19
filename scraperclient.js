const net = require('net');
const client = new net.Socket();
const port = 3000;
const host = 'localhost';

client.connect(port, host, function(){
  console.log('Connected');
  client.write('Xbox One');
});

client.on('data', function(data){
  let productData = JSON.parse(data);
  console.log(productData);
  client.destroy();
});

client.on('close', function(){
  console.log('closed connection');
});
