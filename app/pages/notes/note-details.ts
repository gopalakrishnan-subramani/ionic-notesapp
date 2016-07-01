import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {NavController, NavParams} from "ionic-angular";
import {LocalStorageService} from "../../services/local-storage-service";

import {NoteEditPage} from "../notes/note-edit";

@Component({
    templateUrl: "build/pages/notes/note-details.html",
    providers: [LocalStorageService]
})
export class NoteDetailsPage {
    note: any;

    constructor(private dataService: LocalStorageService, private nav:NavController, private navParams:NavParams) {
        this.note = navParams.get("note");
    }

    editNote(event, note) {
        this.nav.push(NoteEditPage, {'note' : this.note});
    }

    deleteNote(event, note) {
        this.dataService.deleteNote(note);
        this.nav.pop();
    }
}