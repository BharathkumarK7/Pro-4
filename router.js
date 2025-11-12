import express from "express";
import students from './routes/student.js';
const app = express();

// 1.Create routes and put your files in a Seperate file
// 2.Create instance of expresss.Router()
// 3.Instead of app.method change that to "router.method".
// 4. Export router
// 5.Import router
// 6. Use the (app.use) nuilt-in middleware & provide your routes.

app.use('/students',students);


app.listen(8000, () => console.log("Server UP!"));