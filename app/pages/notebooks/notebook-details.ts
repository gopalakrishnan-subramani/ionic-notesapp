import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {NavController, NavParams} from "ionic-angular";
import {NotebookEditPage} from "./notebook-edit";

import {NoteEditPage} from '../notes/note-edit';
import {LocalStorageService} from "../../services/local-storage-service";

import {NoteDetailsPage} from "../notes/note-details";

@Component({
    templateUrl: "build/pages/notebooks/notebook-details.html",
    providers: [LocalStorageService]
})
export class NotebookDetailsPage {
    notebook: any;
    notes : any;

    constructor(private dataService:LocalStorageService, private nav:NavController, private navParams:NavParams) {
     this.notebook = navParams.get('notebook');   

     this.notes = dataService.getNotes(this.notebook.id);
    }

    editNotebook(event, notebook) {
        this.nav.push(NotebookEditPage, {'notebook': notebook});
    }

    addNote(event, notebook) {
        this.nav.push(NoteEditPage, {'notebook' : notebook});
    }

    noteTapped(event, note) {
        this.nav.push(NoteDetailsPage, {'notebook': this.notebook, 'note': note});
    }

    deleteNotebook(event, notebook) {
        this.dataService.deleteNotebook(notebook);
    }
}