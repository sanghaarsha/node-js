const fs = require("fs");
const chalk = require("chalk");

// Loading all notes
const loadNotes = function () {
    try {
        return JSON.parse(fs.readFileSync("./data.json").toString());
    } catch (error) {
        return [];
    }
};

// Saving notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("data.json", dataJSON);
};

// Adding Notes
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find((item) => item.title === title);

    if (!duplicate) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
        console.log(chalk.green.inverse("New Note added."));
    } else console.log(chalk.red.inverse(`Note of Title '${title}' is Taken.`));
};

// Removing Notes
const removeNote = (title) => {
    const notes = loadNotes();
    const newArray = notes.filter((item) => item.title !== title);
    if (newArray.length < notes.length) {
        saveNotes(newArray);
        console.log(chalk.green.inverse(`Note Titled '${title}' Removed.`));
    } else {
        console.log(chalk.red.inverse(`Note Titled '${title}' Not Found.`));
    }
};

// Reading notes
const readNotes = (title) => {
    const notes = loadNotes();
    const wantedNote = notes.find((item) => item.title == title);
    if (wantedNote) {
        console.log(chalk.inverse(`${wantedNote.title}`));
        console.log(`\n${wantedNote.body}`);
    } else {
        console.log(chalk.red.inverse(`Note Titled '${title}' Not Found.`));
    }
};

// Listing out Notes
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((item) => {
        console.log(chalk.inverse(`${item.title}`));
        console.log(`${item.body}\n`);
    });
};

// Modules to export
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes,
    listNotes: listNotes,
};
