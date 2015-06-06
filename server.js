var util = require('util'),  
    http = require('http');
    port = 8080

http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Forever? forever eva? forever eva?')
  res.end();
  console.log("Server listening on: http://localhost:%s", port);
}).listen(port);

// /* server started */  
// util.puts('> hello world running on port 8080');

// setTimeout(function () {  
//   util.puts('Throwing error now.');
//   throw new Error('User generated fault.');
// }, 5000);