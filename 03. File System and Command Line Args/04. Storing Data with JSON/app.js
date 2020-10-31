const fs = require("fs");

const book = {
    title: "Muna Madan",
    author: "Laxmi Parsad Devkota",
    ratings: "4.7",
    currency: "NPR",
    price: 200,
};

// converting javascript object to JSON format
const bookJSON = JSON.stringify(book);

// parsing json data into javascript objects
const parsedJSON = JSON.parse(bookJSON);
console.log(parsedJSON.title, parsedJSON.author);

// appending got JSON data to JSON file
fs.writeFileSync("data.json", bookJSON);

// Reading the JSON file
const fileData = fs.readFileSync("data.json");
console.log(fileData);
// Notice we get data buffer not the content of the file.

// we can use toString method to convert buffer into sring data
const fileDataJSON = fileData.toString();
console.log(fileDataJSON);

// Parsing read data from the file
const parsedFileDataJSON = JSON.parse(fileDataJSON);
console.log(
    parsedFileDataJSON.title,
    parsedFileDataJSON.author,
    parsedFileDataJSON.ratings,
    parsedFileDataJSON.currency,
    parsedFileDataJSON.price
);
