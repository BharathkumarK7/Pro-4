// // Create Folder
// // npm init -y
// // npm i express
// // create Instance express
// // Provide port: 8000
// // Basic Route /



// import express from  'express';

// const app = express();
// // app.get("/", (_req,res)=> {
// //   res.send("Welcome to Express.js");
// // })

// // Advance Routing
// // String Pattern path

// // app.get("/ab?cd", (_req,res) => 
//   // {
//   app.get('/ab(cd)?', (_req, res) => res.send('Matched /abcd or /ab'));
  
//   // res.send("If the user hit (acd) or (abcd) then this will run.");
// // })


// app.listen(8000, ()=> console.log("Server Up!"));

import express from 'express';
const app = express();

// Option 1: Literal route with escaped ?
app.get('/ab\\?cd', (_req, res) => {
  res.send('Matched literal route /ab?cd');
});

// Option 2: Regex route for /abcd or /abd
app.get(/^\/ab?cd$/, (_req, res) => {
  res.send('Matched regex route /abcd or /acd');
});

app.listen(8000, () => {
  console.log("Server Up!")});
