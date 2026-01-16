import express from "express";
const app = express();

app.get ('/', (_req, res) => {
  res.send("Home Sweet Home!");
})

app.listen(8500,() => console.log("Server UP!"));