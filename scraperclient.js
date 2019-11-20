const net = require('net');
const client = new net.Socket();
const port = 443;
const host = '35.221.43.110';

let request = "carpet";

client.connect(port, host, function(){
  console.log('Connected');
  client.write(request);
});

client.on('data', function(data){
  let productData = JSON.parse(data);
  console.log(productData);
  client.destroy();
});

client.on('close', function(){
  console.log('closed connection');
});
