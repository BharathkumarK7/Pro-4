import express from "express";

const app = express();


app.get("/product/order/:day/:month/:year",  (_req,_res) => {
  const {day, month, year} = _req.params;
  _res.send(`product was ordered on: ${day}/${month}/${year}`)
})

app.listen(8000, () => console.log("Server UP!"));