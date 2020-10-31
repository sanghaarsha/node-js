// arguments passed into node through terminal can be acced from process.argv
// thus obtained data is unparsed and contain more data than we need
// we can make our own parser to get the data we want, but code might be buggy
// we can use a node package whuch has more tested and relaiable codebse

const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// commands we need to add:
// add, remove, read, list

// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note.",
    handler: function () {
        console.log("Adding a new note...");
    },
});

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note.",
    handler: function () {
        console.log("Removing note...");
    },
});

// Create list command
yargs.command({
    command: "list",
    describe: "List out all notes.",
    handler: function () {
        console.log("Listing out all notes...");
    },
});

// Create read command
yargs.command({
    command: "read",
    describe: "Read a note.",
    handler: function () {
        console.log("Reading note...");
    },
});

// Listing out all the arguments passed using args
console.log(yargs.argv);
