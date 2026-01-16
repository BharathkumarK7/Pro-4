const express = require('express');
const cors = require('cors');
const app =express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ extended: true }));

//DSA ADMISSION
app.post('/api/admission', (_req,res) => {
  const {name, email, phone, dsalevel} = req.body;
  console.log('New admission:', {name, email, phone, dsalevel }); // Log for now; add DB later
  res.json({success: true, message: `Welcome ${name}! DSA ${dsalevel} course registered.` });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});