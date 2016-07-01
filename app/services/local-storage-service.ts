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
 


}