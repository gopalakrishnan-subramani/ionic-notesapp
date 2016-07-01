import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {LocalStorageService} from "../../services/local-storage-service";
import {NavParams} from "ionic-angular";

@Component({
    templateUrl: "build/pages/notebooks/notebook-edit.html",
    providers: [LocalStorageService]
})

export class NotebookEditPage {
    notebook: any;

    constructor(private dataService: LocalStorageService, private navParams:NavParams) {
          
        this.notebook = navParams.get('notebook');

        console.log("notebook received at edit ", JSON.stringify(this.notebook));
        
        if (!this.notebook) {
            this.notebook = {title: 'My Notebook', id: -1};
        } 

    }

    saveNotebook() {
        console.log(JSON.stringify(this.notebook));
        this.dataService.saveNotebook(this.notebook);
    }
}