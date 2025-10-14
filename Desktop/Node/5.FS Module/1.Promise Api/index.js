import * as fs from 'fs/promises';

// Creating Directory / folder using JS 
try{
  // CREATE A FILE --await fs.mkdir("/Users/bharathk7
  // /Desktop/Node/5. FS Module/ newFilee", {recursive: true});
  
  // Read the Content
  //const files = await fs.readdir("/Users/bharathk7/Desktop/Node/5. FS Module/ newFilee");
  //for(const file of files) {
  //  console.log(file);
  //}


  //Remove Folder / Directory
  //await fs.rmdir("/Users/bharathk7/Desktop/Node");
  
  //Create and Write Files
  //await fs.writeFile('ReadmssEEE.md', "Hello Thomas ");

  //Read File
  //const data = await fs.readFile('ReadmssEEE.md', 'utf-8')
  //console.log(data)

  //Append File
  //await fs.appendFile('ReadmssEEE.md', " I'm doing this today. I'm about to finish this node course today.");

  // Copy File
  //await fs.copyFile('ReadmssEEE.md', "info.txt");

  // Get the File Info
  //const info = await fs.stat("info.txt");
  //console.log(info);
  
  // Find whether the file is a folder or a file or a directory
  const info = await fs.stat("info.txt");
  console.log(info.isDirectory());
  console.log(info.isFile());


} catch(error) {
  console.log(error)
} 