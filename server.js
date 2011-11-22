var net = require('net'),
    rl = require('readline'),
    i = rl.createInterface(process.stdin, process.stdout, null);

var server = net.Server ( function(socket) {
  console.log('incoming socket!');
  socket.on('data', function(data) {
    console.log('socket says '+data);
  });
  socket.write('hi, socket!');
  (function ask(){
    i.question('> ', function(msg) {
      socket.write(msg);
    });
  })();
}).listen(0x5Ad);

console.log('server ready!');

