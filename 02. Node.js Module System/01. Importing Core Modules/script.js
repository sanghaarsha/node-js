// Some node modules like 'console.log' is globally available for us to use
// while others need to be imported beforing using them in the script

// Lets import and use 'file system' module, that allows us to access and modify Operating System's files'

const fs = require("fs"); //file-system

// Lets see what happened here
// require("...") does not load module
// it returns all the stuffs from that module
// so, it needs to be stored in a variable
// here 'fs constant' has the return value from calling require file-system module of node.js

fs.writeFileSync("notes.txt", "Hello, Your note created!!");

let yourMsg = "This will be another line.";

fs.appendFileSync("notes.txt", "\n" + yourMsg);
