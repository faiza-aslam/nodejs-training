const http = require('http');
const fs = require('fs');

f = fs.readFileSync('./file.txt', 'utf8');

http.createServer(function(_req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(f);
    res.end;
}).listen(4000);