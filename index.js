import express from 'express';

const app = express();
app.get("/", (_req,res) => {
  res.send("Welcome to express.js AND Good luck");
})

app.listen(8000, () => {
  console.log("Server Up!")
});
