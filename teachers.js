import express from "express";
const router = express.Router();

router.get("/all", (_req,res) => {
  res.send("All Teachers")
}); 

router.post("/create", (_req,res) => {
  res.send("Sign in New Teachers");
});

router.put("/update", (_req,res) => {
  res.send("Update Teachers Id");
});

router.delete("/delete", (_req,res) => {
  res.send("Remove Teachers From the DB.");
});

export default router;