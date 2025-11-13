import express from 'express';

const app = express();

// Router params
app.get('/student/delete/:id', (_req,res) => {
  res.send(_req.params.id);
})
app.listen(8000, () => console.log("Server Up!"));
