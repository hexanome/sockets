var net = require('net'),
    socket = new net.Socket(),
    rl = require('readline'),
    i = rl.createInterface(process.stdin, process.stdout, null),
    S = String;

socket.connect(0x5AD);

socket.on('connect', function () {
    
    socket.write('BEGIN\n');
    
    i.question('> ', function(tos) {
      socket.write(tos);
    });

    socket.on('data', function(data) {
      var str = S(data);
      console.log(str);
      if (str == 'END') {
        socket.destroy();
      }
    });

});
