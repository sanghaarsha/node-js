const { argv } = require("yargs");
const yargs = require("yargs");

// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note.",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    },
});

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note.",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        console.log("Removing note...", argv);
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
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        console.log("Reading note...", argv);
    },
});

// This is must for yargs to work
yargs.parse();
