import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {NavParams} from "ionic-angular";
import {LocalStorageService} from "../../services/local-storage-service";

@Component({
    templateUrl: "build/pages/notes/note-edit.html",
    providers: [LocalStorageService]
})

export class NoteEditPage {
    note: any;
    notebook: any; 

    constructor(private dataService: LocalStorageService, private  navParams:NavParams) {
        this.notebook = navParams.get("notebook");

        this.note = navParams.get("note");

        if (!this.note) {
            this.note = {title: '', description: '', notebookId: this.notebook.id, id: -1};
        }
    }

    saveNote(event) {
        this.dataService.saveNote(this.note);
    }
}