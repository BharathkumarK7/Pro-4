import express from "express";

const allstudents = (_req,_res) => {
  _res.send("All Students");

}

const newstudents = (_req,res) => {
  res.send("Create new user");
}

const updatestudent = (_req,res) => {
  res.send("Update User");
}

const deletestudent = (_req,res) => {
  res.send("Delete User");
}

export {allstudents, newstudents, updatestudent, deletestudent };