const express = require("express");
const path = require("path");
const fs = require("fs");
const {v4 : uuidv4} = require("uuid");

const router = express.Router();

const notesPath = "..Develop/db/db.json" 

router.get('/api/notes', (req, res) => {
    fs.readFile(notesPath, 'utf8', (err, data) => {
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.post('/api/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }

    fs.readFile(notesPath, 'utf8', (err, data) => {
        let notes = JSON.parse(data) || [];
        notes.push(newNote);
        fs.writeFile(notesPath, JSON.stringify(notes, null, 2), (err) => {
            res.json(newNote);
        });
    });
});

router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    notesDB = notesDB.filter((notes) => noteId.id !== noteID);
    fs.writeFileSync(path.join(__dirname, notes_path), JSON.stringify(notesDB));
    res.JSON(notesDB);
});

module.exports = router;