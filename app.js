const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // hard exit (program shutdown)
});

server.listen(3000);