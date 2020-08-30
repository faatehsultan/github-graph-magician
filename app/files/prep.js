//GH GRAPH MAGICIAN
//Website: https://faatehsultan.github.io/github-graph-magician
//Version: 1.1.0
//Developed by: Syed Faateh Sultan Kazmi
//-------------------------------------------------------------
/*Disclaimer: The developer do not promote or recommend taking any 
kind of unfair advantage using this app. User will be responsible 
for taking any unfair advantage of this app*/

const fs = require("fs");
const jsonfile = require("jsonfile");
const SOURCE_FILE_PATH = "config.json";


jsonfile.readFile(SOURCE_FILE_PATH, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile("temp.txt", data[0].intensity, ()=>{});      
  }
});

/*Disclaimer: The developer do not promote or recommend taking any 
kind of unfair advantage using this app. User will be responsible 
for taking any unfair advantage of this app*/
