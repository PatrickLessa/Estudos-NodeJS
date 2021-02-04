const http = require("http");


http.createServer( (req, res) => {
    res.end("<h1>Hello</h1><br><h4>VAI LOGO</<h4>");
}).listen(3333);
console.log("server in the air")