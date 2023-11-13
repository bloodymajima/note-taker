// Imports modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const {v4 : uuidv4} = require("uuid");

const router = express.Router();

const notesPath = "../Develop/db/db.json" 

// Routes for notes

// router.get('/api/notes', (req, res) => {
//     fs.readFile(notesPath, 'utf8', (err, data) => {
//         let notes = JSON.parse(data) || [];
//         res.json(notes);
//     });
// });

router.get('/api/notes', (req, res) => {
    fs.readFile(notesPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            // Send an appropriate error response to the client
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        try {
            let notes = JSON.parse(data) || [];
            res.json(notes);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            // Send an appropriate error response to the client
            res.status(400).json({ error: 'Invalid JSON Format' });
        }
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

// Routes for HTML

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;