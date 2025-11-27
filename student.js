import express from "express";
const router = express.Router();


import { 
  allstudents, 
  newstudent, 
  updatestudent, 
  deletestudent,
} from "../controllers/student.js";

router.get("/all", allstudents); 
router.post("/create", newstudent );
router.put("/update", updatestudent), 
router.delete("/delete", deletestudent);


export default router;