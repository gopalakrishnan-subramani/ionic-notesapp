import {Page} from "ionic-angular";
import {Component} from "@angular/core";

import {Events} from 'ionic-angular';


import {NavController} from "ionic-angular";
import {NotebookDetailsPage} from "./notebook-details";
import {NotebookEditPage} from "./notebook-edit";

import {LocalStorageService} from "../../services/local-storage-service";


/*
 FIXME: I could not find automatically refresh the page when nav.pop called, right now, using
 events for that..buggy, TODO: event is not removed when page unload
*/

@Page({
    templateUrl: 'build/pages/notebooks/notebooks.html',
    providers: [LocalStorageService]
})
export class NotebooksPage {
    notebooks: Array<{title: string, id:number}>;

    constructor(private dataService:LocalStorageService, private nav:NavController, public events:Events) {
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

        events.subscribe('notebooks:refresh', (data) => { 
            console.log("received notebook:refresh");
            this.notebooks = this.dataService.getNotebooks();
        });
    }

    onPageLoaded() {
        console.log("onpageloaded");
    }

    onPageShow() {
        console.log("on page show");
    }

    refresh() {
         this.notebooks = this.dataService.getNotebooks();
    }

    //FIXME: Pull to refresh, doesn't work, not solid documentation on this
    doRefresh(event, refresher) {
        console.log("doRefresh");
        this.notebooks = this.dataService.getNotebooks();
        refresher.complete();
    }

    notebookTapped(event, notebook) {
            this.nav.push(NotebookDetailsPage, {notebook: notebook})
    }

    addNotebook(event) {
        this.nav.push(NotebookEditPage, {notebook: null} );
    }
}
