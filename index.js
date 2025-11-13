import express from "express";  
import students from './routes/student.js';
import teacher from './routes/teachers.js';
const app = express();



app.use('/Teachers', teacher);
app.use('/students', students);

app.listen(8000, ()=> console.log("Server Up!"));
