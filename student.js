import express from 'express';
const router = express.Router();

router.get('/all', (_req,res) => {
  res.send("All Students")
})
router.post('/create', (_req,res) => {
  res.send("Sign in Students Id")
})
router.put('/update', (_req,res) => {
  res.send("Update student's Id")
})
router.delete('/delete', (_req,res) => {
  res.send("Remove Students from the Database")
})

export default router;