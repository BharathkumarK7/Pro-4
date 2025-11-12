import express from "express";

const app = express();


// Basic Routing
// app.get('/', (_req, res) => {
  // res.send("Home");
// })

// HTTP METHODS

// app.get('/about', (_req,res) => {
//   res.send("<h1> About </h1>")
// })

// app.get('/contact', (_req,res) => {
//   res.send("<h1>Contact</h1>")
// })

// app.get('/Services', (_req, res) => {
//   res.send("<h1>Services </h1>")
// }) 

// Get - Retrive Data
// Post - create/ Insert Data
// Put - Completely Update Data 
// Patch - Partially Update Data
// Delete - Delete Data
// All - Any HTTP Request Method

// String Pattern Path

// This code works
// app.get(/^\/ab?cd$/, (_req, res) => {

// app.get("/ab?cd", (_req,res) => { // THIS ONE WON'T WORK

// res.send("If the user hit (acd) or (abcd) then this will run.");
// });


// Regex
// app.get(/o/, (_req,res) => {
//   res.send("If the path includes the letter (o) it will work." );
// })

// Advanced Regex
app.get(/^\/users\/[0-9]{4}/, (_req,res) => {
  res.send("Working");
});


app.get(/^\/John\/[0-9]{5}/, (_req, res) => {
  res.send("It's John Wick")
});


app.get('/products/pd/iphone', (_req,res) => {
  res.send("This code will only run if you product /products/pd/iphone");
});

app.get('/products/product/product-details', (_req,res)=> {
  res.send("/products/product/product-details");

});
// Single Callback
app.get('/single-cb', (_req,res) => {
  res.send("Single Callback");
});

// Double Callback
app.get(
  '/double-cb', 
  (_req,_res, next) => {
    console.log("First Callback")
    next();
},
(_req,res) => {
  res.send("Second Callback")
})

// Arrays of Callback Function
app.get(
  '/Array-cb'
);


app.listen(8000, () => console.log("Server Up!"));  