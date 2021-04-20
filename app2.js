var http = require('http');

http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello World from NODE JS Course by Sarwish");
}).listen(3000);

console.log("Server has been started suscessfully, you can Ctrl+c to terminate");