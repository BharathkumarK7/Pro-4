import express from "express";
const app = express();

app.post ('/', (_req, res) => {
  res.send("Home");
})

app.listen(8500,() => console.log("Server UP!"));