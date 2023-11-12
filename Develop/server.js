const express = require('express');
const routes = require('./routes/notes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", routes);

app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
);
