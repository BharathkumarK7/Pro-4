import http, { createServer } from "http";
import fs from "fs";

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.writeHead(200, "Ok", {"Content-Type": "text/html"})
    fs.readFile("./Public/home.html", (error, data)=> {
      if(error) throw error;
      res.end(data);
    });
  }
  else if(req.url === "/about") {
    res.writeHead(200, "OK", {"Content-Type": "text/html"});
        fs.readFile("./Public/about.html", (error, data)=> {
      if(error) throw error;
      res.end(data);
    });
  }
  else {
    res.writeHead(404, "Bad", {"Content-Type": "text/html"});
    res.end("<h3> 404 Page Not Found :( </h3>");
  }

});
server.listen(8001, () => console.log("Server Up!"));
