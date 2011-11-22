var net = require('net'),
    socket = new net.Socket(),
    rl = require('readline'),
    S = String;

socket.connect(0x5AD);

socket.on('connect', function () {
    
    socket.write('BEGIN\n');
    
    rl.question('> ', function(tos) {
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
