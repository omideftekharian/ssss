const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello, World!');
    response.end();
  } else {
    response.write('404 Not Found');
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});