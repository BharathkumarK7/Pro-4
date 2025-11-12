import express from 'express';
const app = express();


const cb1 = (_req, _res, next)=> {
  console.log('First Callback')
  next()
}

const cb2 = (_req,_res, next) => {
  console.log('Second Callback')
  next()
}
const cb3 = (_req, _res) => {
  console.log('Third Callback');
  _res.send("Array of Callbacks"); //// VERY IMPORTANT    THIS UNDERSCORE _res _res _req _req
}

app.get("/array-cb",[cb1, cb2, cb3] );

app.listen(8000, () => console.log("Server Up!")) ;