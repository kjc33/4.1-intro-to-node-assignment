const http = require("http");
const url = require("url");

let productsList = ["milk", "eggs", "cheese", "pork", "shrimp", "chicken"];

// Create a Server Object
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/profile") {
      res.write("This is the /profile page!");
    } else if (req.url.startsWith("/products")) {
      let parsedUrl = url.parse(req.url, true);
      let search = parsedUrl.query;
      if (!search || !search.search) {
        res.write("This is the /products page!");
      } else {
        let searchValue = search["search"] ? search["search"].toLowerCase() : null;
        let isProductFound = productsList.includes(searchValue);
        if (isProductFound === true) {
          res.write(`Product "${search["search"]}" found.`);
        } else {
          res.write(`Product "${search["search"]}" not found.`);
        }
      }
    } else if (req.url === "/profile") {
      res.write("This is the /profile page!");
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
