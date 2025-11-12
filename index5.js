import express from 'express';
const app= express();

// Refactor
// app.route()

app
.route('/student')
.get((_req,res) => res.send("All_Students"))
.post((_req,res) => res.send('Add_New_Students'))
.put((_req,res) => res.send('Update_Students'))
.delete((_req,res) => res.send('Delete_Students'))
.patch((_req,res) => res.send("What's with the Patch."));



app.listen(8000, () =>  console.log("Server Up!"));