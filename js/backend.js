const http = require('http');
const querystring = require('querystring');

const port = 8888;

const server = http.createServer(function(req, res){
    // This is the parameters of the GET request.
    var reqdata = querystring.parse(req.url.split('?')[1]);

    //TODO: process the request data.
    //TODO: load HTML.

}).listen(port);