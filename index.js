import express from 'express';

const app = express();

// Router params
// app.get('/student/delete/:id', (_req,res) => {
  app.get('/ecom/products/iphone/:model', (_req,res) => {
    const{model} = _req.params;
  // res.send("iphone",_req.params.model);
  res.send(`iphone${model} pro max` )
})
app.listen(8000, () => console.log("Server Up!"));
  