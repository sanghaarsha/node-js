const fs = require("fs");

// storing databuffer in a variable
const dataBuffer = fs.readFileSync("./data.json");

//converting buffer to readable string JSON
const jsonData = dataBuffer.toString();

// conversting JSON to Object
const user = JSON.parse(jsonData);
console.log(user);

// setting values of objet properties
user.name = "Mark";
user.age = 99;
user.planet = "Mars";

console.log(user);

// Converting Object with new value to JSON format
const newJSONData = JSON.stringify(user);

// over-writing json with new data
fs.writeFileSync("data.json", newJSONData);
