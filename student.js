import express from "express";

const allstudents = (_req,res) => {
  res.send("All Students")
}; 

const newstudent  = (_req,res) => {
  res.send("Sign in New Student");
};

const updatestudent = (_req,res) => {
  res.send("Update Student Id");
};

const deletestudent = (_req,res) => {
  res.send("Remove student From the DB.");
};

export { allstudents, newstudent, updatestudent, deletestudent };