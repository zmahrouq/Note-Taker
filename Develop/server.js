const express = require ("express");
const app = express();
const path = require('path');
const routes = require('./routes/routes');

//Allows you to use the public folder
app.use(express.static('public'));

app.use('/api', routes);

// http://localhost:3000/
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

// http://localhost:3000/notes
app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});



app.listen(3000, ()=>{
    console.log('server is runiinggggg')
})
