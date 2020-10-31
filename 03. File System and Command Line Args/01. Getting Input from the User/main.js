// we can take input from node by using 'process.argv'
// this will take arguments passed while running node command from terminal

//This will take three command line arguments and display them
// console.log(process.argv[2], process.argv[3], process.argv[4]);

// Lets create a function to add and remove note
const command = process.argv[2];

if (command === "add" || command === "Add") {
    console.log("Adding your note...");
} else if (command === "remove" || command === "Remove") {
    console.log("Removing your note...");
} else {
    console.log("'" + process.argv[2] + "'" + " is unknown command.");
}
