const http = require('http');

//console.log('HTTp module');
// req -> incoming request
// res -> response -> what are sending back

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello world! Welcome to our homepage');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the pae you are looking for</p>
    <a href='/'>Back Home</a>
  `);
});

server.listen(5000);
