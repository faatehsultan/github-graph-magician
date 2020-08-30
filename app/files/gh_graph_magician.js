//GH GRAPH MAGICIAN
//Website: https://faatehsultan.github.io/github-graph-magician
//Version: 1.1.0
//Developed by: Syed Faateh Sultan Kazmi
//-------------------------------------------------------------
/*Disclaimer: The developer do not promote or recommend taking any 
kind of unfair advantage using this app. User will be responsible 
for taking any unfair advantage of this app*/

const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const fs = require("fs");

const FILE_PATH = "./dataFile.json";
const TARGET_SPOT_FILE = "./config.json";

const isLeapYear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const magic = (index, spotList) => {
  if (index >= spotList.length) {
    return simpleGit().push();
  }

  const DATE = moment()
    .subtract(moment().weekday(), "d")
    .subtract(1, "y")
    .add(1 + Number(isLeapYear(moment().year())), "d")
    .add(spotList[index].x, "w")
    .add(spotList[index].y, "d")
    .format();

  const data = {
    date: DATE,
  };

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, magic.bind(this, ++index, spotList));
  });
};

//main function
jsonfile.readFile(TARGET_SPOT_FILE, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    magic(1, data);
  }
});

/*Disclaimer: The developer do not promote or recommend taking any 
kind of unfair advantage using this app. User will be responsible 
for taking any unfair advantage of this app*/
