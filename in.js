import express from "express";
const app = express();

app.get ('/', (_req, res) => {
  res.send("Home Sweet Home!");
})


app.put ('/', (_req, res) => {
  res.send("Vanakam da !")
})

app.post('/', (_req, res) => {
  res.send("Hello Nice to meet you!")
})

app.patch ('/', (_req,res) => {
  res.send("Patcher!")
})

app.delete('/', (_req,res) => {
  res.send("Delete the garbage values in the memory!")
})

app.head ('/', (_req,res) => {
  res.send("The head portion is always correct Listen to it!")
})

app.options('/', (_req,res) => {
  res.send("The result must always have options")
})
app.listen(8500,() => console.log("Server UP!"));