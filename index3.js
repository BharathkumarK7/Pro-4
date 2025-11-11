import express from 'express';

const app = express();

const cb1 = (_req, _res, next) => {
  console.log('First callback');
  next()
}

const cb2 = (_req, _res, next) => {
  console.log('Second callback');
  next()
}

app.get('/Crazyness', [cb1, cb2], (_req, _res, next) => {
  console.log('Third Callback');
  next()
},
(_req, _res, next) => {
  console.log('Fourth Callback');
_res.send('Crazynes');
}
);

app.listen(8000, () => console.log("Server Up!"));
