const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

const port = 8888;

const server = http.createServer(function(request, response){
    // Load HTML file.
    var url = request.url.split('?')[0];
    var requestdata = querystring.parse(request.url.split('?')[1]);
    console.log('[request url]: ' + url);

    if(url === '/'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('../index.html', 'utf-8', function(err, data){
            if(err){throw err};
            response.end(data);
        });
    }else if(url === '/index.html'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('../index.html', 'utf-8', function(err, data){
            if(err){throw err};
            response.end(data);
        });
    }else if(url != '/'){ // Load static resource.
        var surl = '..' + url
        var type = surl.substr(surl.lastIndexOf(".")+1, surl.length)

        response.writeHead(200,{'Content-type':"text/"+type});
        fs.readFile(surl, function(err, data){
            if(err){throw err};
            response.end(data);
        });
    }

    // TODO: Process GET request failed.
    var stringobj = JSON.stringify(requestdata)
    if( stringobj !== '{}'){
        console.log('[GET request]: ' + stringobj);
        //TODO: return info to browser.
    }

}).listen(port, '127.0.0.1', console.log('Server start at '+port));