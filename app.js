import 'dotenv/config';
import express from "express";
import { arr, home, handleForm, showNotes, deleteNote, editNotePage, editNote } from './services/service.js';

const app = express();

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routes
app.get("/", home);
app.get("/form", handleForm);
app.get("/show", showNotes);
app.post("/form", handleForm);
app.get("/delete/:id", deleteNote);
app.get("/editPage/:id", editNotePage);
app.post("/edit/note/:id", editNote)
// app.get("/show/sort", sortNotes);

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send("something went wrong")
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`server is running of port ${PORT}`)
})