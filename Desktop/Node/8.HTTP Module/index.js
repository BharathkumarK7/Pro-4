import http from "http";

// Create our Server
const server = http.createServer((req, res) => {
    // console.log(req);

    // res.setHeader("content-Type", "text/html");
    // res.statusCode = 404;
    // res.statusMessage = "Not so Bad";

    // shothand for status (code, message, & header)
    res.writeHead(202, "Good", {"content-Type": "text/html"});


    res.write("<h1>Hello from Node.js Server </h1>");
    // res.end("Hello End of the Page!")
});


// Listening on  port 8000
server.listen(8000, () => console.log("server Up!")); 