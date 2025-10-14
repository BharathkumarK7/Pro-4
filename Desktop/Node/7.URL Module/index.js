import {URL} from "url";
// URL - Uniform Resource Locator
const myURL = new URL("http://www.example.com:8080/p/a/t/h?query=string#hash");

//console.log(myURL.hash);  // #hash
//console.log(myURL.host);  // www.example.com:8080

// console.log(myURL.hostname); // hostname -- www.example.com
// console.log(myURL.port); // port  - 8080

// console.log(myURL.href) // https://www.example.com:8080/p/a/t/h?query=string#hash

// console.log(myURL.protocol); // http:


// console.log(myURL.search) // ?query=string
// console.log(myURL.searchParams) //URLSearchParams { 'query' => 'string' }

//  BOTH WORKS THE SAME

// console.log(myURL.toString()); //http://www.example.com:8080/p/a/t/h?query=string#hash
// console.log(myURL.toJSON()); //http://www.example.com:8080/p/a/t/h?query=string#hash

// THAT'S ALL ABOUT THE URL MODULE