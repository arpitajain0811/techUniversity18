const http = require('http');
const fs = require('fs');

const portNumber = process.argv[2];
const fileLocation = process.argv[3];
const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(fileLocation);
  readStream.pipe(res);
});
server.listen(portNumber);
// test for starting a server and invalid stream(null, undefined)
