import express from "express";

const app = express();

// Ugly Code - A lot of lines of code
app.get('/Student', (_req, _res) => {
  _res.send('All Students')
})
app.post('/Student', (_req, _res) => {
  _res.send('Add new Students')
})
app.put('/Student', (_req, _res) => {
  _res.send('Update Students')
})
app.delete('/Student', (_req, _res) => {
  _res.send('Delete Students')
})



app.listen(8000, () => console.log('Server Up!'));