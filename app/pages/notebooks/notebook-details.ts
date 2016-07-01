import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {NavController, NavParams} from "ionic-angular";
import {NotebookEditPage} from "./notebook-edit";

@Component({
    templateUrl: "build/pages/notebooks/notebook-details.html"
})
export class NotebookDetailsPage {
    notebook: any;
    constructor(private nav:NavController, private navParams:NavParams) {
     this.notebook = navParams.get('notebook');    
    }

    editNotebook(event, notebook) {
        this.nav.push(NotebookEditPage, {'notebook': notebook});
    }
}