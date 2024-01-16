const http = require("http");
const url = require("url");

// Create a Server Object
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/profile") {
      res.write("This is the /profile page!");
    } else if (req.url === "/products") {
      res.write("This is the /products page!");
    } else if (req.url === "/cart") {
      res.write("This is the /cart page!");
    } else if (req.url === "/register") {
      res.write("This is the /register page!");
    } else if (req.url === "/login") {
      res.write("This is the /login page!");
    } else {
      res.write(req.url);
    }
    res.end();
  })
  .listen(8080);
