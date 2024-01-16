const http = require("http");

// Create a Server Object
http.createServer(function (req, res) {
    res.write("Hello Katie!");
    res.end();
}).listen(8080);