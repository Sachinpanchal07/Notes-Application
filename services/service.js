import fs from "fs/promises";
const URL = process.env.URL;
import { homeStyling, showNotesStyling, editFormStyling } from "./styling.js";


// reading file
export async function arr(){
    try{
        const Notes = await fs.readFile("./notes.json", "utf-8");
        let currNotes = JSON.parse(Notes);
        return currNotes;
    }catch(err){
        let currNotes = [];
        return currNotes;
    }   
};

// home page
export function home(req, res, next){
    try{
        // throw new Error("haha this is error")
        let data = `${homeStyling}`;
        data += `
            <div class="card">
                <h1>Welcome to Notes App</h1>
                <a href="/form"><button class="btn-add">Add Notes</button></a>
                <a href="/show?sort=old"><button class="btn-show">Show Notes</button></a>
            </div>
        `
        res.status(200).send(data);
    }catch(err){
        next(err);
    }
}


// handle form
export async function handleForm(req, res, next){
    try{

        if(req.method == "GET"){
            const data = await fs.readFile("./public/form.html", "utf-8");
            res.send(data)
        }
        else if(req.method == 'POST') {
            let {title , desc} = req.body;
            if(!title || !desc) {
                let temp = `<h1>Please enter details correctly</h1>`
                temp += `<br><a href="${URL}/form">Back to form</a>`
                res.send(temp);
            }
            const note = {id: Date.now(), title, desc};
            let notes = await arr();
            notes.push(note);
            await fs.writeFile("./notes.json", JSON.stringify(notes));
            res.status(201).redirect(URL+"/show?sort=old")
        }
    }catch(err){
        next(err);
    }
}

// Show Notes
export async function showNotes(req, res, next){
    try{
        const sortOrder = req.query.sort
        // console.log(sortOrder);
        let notes = await arr();
        if (notes.length == 0) {
            return res.send(`
                <style>
                    body { font-family: sans-serif; text-align: center; padding: 50px; background: #f4f7f6; }
                    a { color: #007bff; text-decoration: none; font-weight: bold; }
                </style>
                <h1>No notes found</h1>
                <a href='/form'>+ Add your first note</a>
            `);
        }
        let cards = showNotesStyling
    
        cards += `<div class="nav-container">
            <a href="/" class="btn btn-home">Home</a>
            <a href="/show?sort=old" class="btn btn-sort">Oldest</a>
            <a href="/show?sort=new" class="btn btn-sort">Newest</a>
        </div>`
    
        if(sortOrder == "new"){             
            notes.sort((a, b)=>b.id - a.id);
        }
        notes.forEach((note, index)=>{
            cards += `
                <div class="note-card">
                    <h3>${note.title}</h3>
                    <p>${note.desc}</p>
                    <div class="actions">
                        <a href="/editPage/${index}" class="btn btn-edit">Edit</a>
                        <a href="/delete/${index}" class="btn btn-delete">Delete</a>
                    </div>
                </div>
            `;
        })
        res.status(200).send(cards)
        // console.log(notes)
    }catch(err){
        next(err);
    }
}


// delete notes
export async function deleteNote(req, res, next) {
    try{
        const { id } = req.params;
        console.log("note deleted ", id);
        let notes = await arr();
        notes.splice(id, 1);
        await fs.writeFile("./notes.json", JSON.stringify(notes));
        res.status(204).redirect(URL+"/show")
        // console.log(index);
    }catch(err){
        next(err);
    }
}

// edit notes page
export async function editNotePage(req, res, next){
    try{
        const { id } = req.params;
        let notes = await arr();
        let formTemp = editFormStyling;
        formTemp += `
        <div class="edit-container">
            <h2>Edit Note</h2>
            <form action="/edit/note/${id}" method="POST">
                <label>Note Title</label>
                <input type="text" name="title" value="${notes[id].title}" placeholder="Enter the title">
                
                <label>Description</label>
                <textarea name="desc" rows="10" placeholder="Enter the description">${notes[id].desc}</textarea>
                
                <button type="submit" class="btn-save">Save Changes</button>
            </form>
            <a href="/show" class="btn-back">← Back to Notes</a>
        </div>`
        res.status(200).send(formTemp);
        // console.log("edit", id)
    }catch(err){
        next(err);
    }
}

// editnote page
export async function editNote(req, res, next) {
    try{
        const { id } = req.params;
        const {title, desc} = req.body;
        let notes = await arr();
        notes[id].title = title;
        notes[id].desc = desc;
        await fs.writeFile("./notes.json", JSON.stringify(notes))
        res.redirect(`${URL}/show`)
        // console.log(notes)
        // console.log(title, desc)
        // console.log("editing")
    }catch(err){
        next(err);
    }
}


