const fs = require("fs");
var data = fs.readFileSync("file.txt");

console.log("Data Buffer: ");
console.log(data);
console.log("\nString : ");
console.log(data.toString());
