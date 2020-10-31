// Initialize npm by running 'npm init'
// install by using npm install  ....
// we are using npm i validator@10.8.0

// lets import installed validator npm package
const validator = require("validator");
// do not provide relative path for npm packages

const creditChecker = validator.isCreditCard("371817886954351");

const urlChecker = validator.isURL("http//www.johndoe.com");

console.log(creditChecker);
console.log(urlChecker);
