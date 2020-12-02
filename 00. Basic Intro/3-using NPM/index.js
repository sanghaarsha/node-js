const fs = require("fs");
const supes = require("superheroes");
const vills = require("supervillains");

let heroName = supes.random();
fs.appendFileSync("SuperHeroes-names.txt", `${heroName}\n`);

let villainName = vills.random();
fs.appendFileSync("SupeVillains-names.txt", `${villainName}\n`);

console.log(heroName);
console.log(villainName);
