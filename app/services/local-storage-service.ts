import {Injectable} from "@angular/core";

//storage service that uses HTML5 localStorage 
//BEWARE: NOT EFFICIENT, USE FOR LEARNING ONLY, NOT FOR PRODUCTION

@Injectable()
export class LocalStorageService {
    constructor() {

    }


    getNotebooks() {
        var notebooks = [];

        for (var key in localStorage){
            console.log("notebook ", key);

           if (key.startsWith("notebook.")){
               console.log(localStorage.getItem(key));

               notebooks.push(JSON.parse(localStorage.getItem(key)));
           }
        }

        return notebooks;
    }

    private getNotebookKeyFromID(id: number) {
        return "notebook." + id;
    }

    private generateUniqueNotebookId() {
        //generate unique id
        //BEWARE: Just for learning, not for production use
        var MAX = 10000;

        while (true) {
            let id : number = Math.floor(Math.random() * MAX);
            var key = this.getNotebookKeyFromID(id);

            if (!localStorage.getItem(key))
                return id;
        }
    }

    getNotebook(id: number) {
        var jsonSerializedText = localStorage.getItem(this.getNotebookKeyFromID(id));
        if (jsonSerializedText) {
            return JSON.parse(jsonSerializedText);
        }

        return null;
    }

    saveNotebook(notebook : any){
        if (notebook.id == -1) {
            notebook.id = this.generateUniqueNotebookId();
        }

        var uniqueItemKey = this.getNotebookKeyFromID(notebook.id);
 
        localStorage.setItem(uniqueItemKey, JSON.stringify(notebook));
    }
 
    deleteNotebook(notebook : any) {
         var uniqueItemKey = this.getNotebookKeyFromID(notebook.id);
         localStorage.removeItem(uniqueItemKey);

        for (var key in localStorage){
            console.log("notebook ", key);

           if (key.startsWith("note." + notebook.id + '.')){
               localStorage.removeItem(key);
           }
        }
    }


    getNotes(notebookId) {
        var notes = [];
        for (var key in localStorage) {
            var prefix = "note." + notebookId + ".";

            if (key.startsWith(prefix)) {
                notes.push(JSON.parse(localStorage.getItem(key)));
            }
        }

        return notes;
    }


    private getNoteKeyFromID(notebookId:number, id: number) {
        return "note." + notebookId + '.' + id;
    }

    private generateUniqueNoteId(notebookId) {
        //generate unique id
        //BEWARE: Just for learning, not for production use
        var MAX = 10000;

        while (true) {
            let id : number = Math.floor(Math.random() * MAX);
            var key = this.getNoteKeyFromID(notebookId, id);

            if (!localStorage.getItem(key))
                return id;
        }
    }

    getNote(notebookId, noteId) {
        var key = this.getNoteKeyFromID(notebookId, noteId);

         var rawJsonText = localStorage.getItem(key);
         var note = null;
         if (rawJsonText) 
         {
             note = JSON.parse(rawJsonText);
         }

         return note;
    }

    saveNote(note) {
        if (note.id == -1) {
            note.id = this.generateUniqueNoteId(note.notebookId);
        }

        var key = this.getNoteKeyFromID(note.notebookId, note.id);
        localStorage.setItem(key, JSON.stringify(note));

        console.log("Note saved ", key,  localStorage.getItem(key));
    }

    deleteNote(note) {
        localStorage.removeItem(this.getNoteKeyFromID(note.notebookId, note.id))
    }


}