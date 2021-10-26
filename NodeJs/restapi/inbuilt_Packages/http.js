var http = require('http');

// It helps to create a server whereas 
// JSON server was create a dummy server.
// It create actual server with NodeJs.

var server = http.createServer(function(req, res) {
    res.write('<h1>Your App with NodeJs.</h1>');
    res.end();
});

server.listen(8800)


// req => What we send to the server.
// res => What server respond.