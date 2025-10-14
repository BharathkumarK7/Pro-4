import http from "http"


const server = http.createServer((req, res) => {
       res.writeHead(202, "Good", {"content-Type": "text/html"});
    res.write("<h1>Hello from Node.js Server Is this Working? Yes Ofcourse it's working</h1>");
});
server.listen(8000, () => console.log("server Up!")); 