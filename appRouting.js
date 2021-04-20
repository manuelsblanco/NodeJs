var http = require('http');
const { readSync } = require('node:fs');
const { deflate } = require('node:zlib');

http.createServer(function(req,res)
{
    //localhost:3000
    var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();

    switch(path)
    {
        //Home Page Case
        case'':
        res.writeHead(200,{'content-type':'text-plain'});
        res.end('Home Page from NODE JS Runtime ');
        break;

        //About Page
        //localhost:3000
        case'about':
        res.writeHead(200,{'content-type':'text-plain'});
        res.end('About PAge from NODE JS');
        break;

        default:
            res.writeHead(404,{'content-type':'text-plain'});
            res.end('Not Found');
            break;
    }
}).listen(3000);

console.log("Server has been started suscessfully, you can Ctrl+c to terminate");