const fs = require("fs");
const yargs = require("yargs");
const notes = require("./notes.js");

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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
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
    handler(argv) {
        notes.removeNote(argv.title);
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
    handler(argv) {
        notes.readNotes(argv.title);
    },
});

// Create list command
yargs.command({
    command: "list",
    describe: "List out all notes.",
    handler() {
        notes.listNotes();
    },
});

// This is must for yargs to work
yargs.parse();
