import { error } from "console";
import * as fs from "fs";

fs.mkdir("/Users/bharathk7/Desktop/Node/5. FS Module/2.Call Back api/ Newnode1", function (error){
  if (error) throw error;
  console.log("Directory Created ...");
})