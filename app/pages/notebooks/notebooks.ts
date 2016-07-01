import {Page} from "ionic-angular";
import {Component} from "@angular/core";

import {NavController} from "ionic-angular";
import {NotebookDetailsPage} from "./notebook-details";
import {NotebookEditPage} from "./notebook-edit";

import {LocalStorageService} from "../../services/local-storage-service";

@Component({
    templateUrl: 'build/pages/notebooks/notebooks.html',
    providers: [LocalStorageService]
})
export class NotebooksPage {
    notebooks: Array<{title: string, id:number}>;

    constructor(private dataService:LocalStorageService, private nav:NavController) {
        /*this.notebooks = [
            {
                title: 'Ionic 2',
                id: 1
            },
            {
                title: 'Angular 2',
                id: 2
            }
        ];*/

        this.notebooks = this.dataService.getNotebooks();
    }

    //Pull to refresh
    doRefresh(event) {
        this.notebooks = this.dataService.getNotebooks();
    }

    notebookTapped(event, notebook) {
            this.nav.push(NotebookDetailsPage, {notebook: notebook})
    }

    addNotebook(event) {
        this.nav.push(NotebookEditPage, {notebook: null} );
    }
}
