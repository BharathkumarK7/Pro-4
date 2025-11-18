import express from "express";

const app = express();

app.param("id", (_req, res, next, id) => {
  console.log(`id: ${id}`)
  next()
})

app.get('/user/:id', (_req, _res) => {
  console.log('This is User id path:');
  _res.send("Response Ok");
})

app.listen(8000, ()=> console.log("Server !p!"));