import express from "express";
const router = express.Router();

router.get("/all", (_req,res) => {
  res.send("All Students")
}); 

router.post("/create", (_req,res) => {
  res.send("Sign in New Student");
});

router.put("/update", (_req,res) => {
  res.send("Update Student Id");
});

router.delete("/delete", (_req,res) => {
  res.send("Remove student From the DB.");
});

export default router;