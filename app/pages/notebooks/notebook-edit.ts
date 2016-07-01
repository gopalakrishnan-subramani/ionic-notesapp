import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {LocalStorageService} from "../../services/local-storage-service";
import {NavParams, NavController} from "ionic-angular";
import {Events} from 'ionic-angular';

import {Vibration} from "ionic-native";

@Page({
    templateUrl: "build/pages/notebooks/notebook-edit.html",
    providers: [LocalStorageService]
})

export class NotebookEditPage {
    notebook: any;

    constructor(private dataService: LocalStorageService, private nav:NavController, private navParams:NavParams,
        public events: Events
    ) {
          
        this.notebook = navParams.get('notebook');

        console.log("notebook received at edit ", JSON.stringify(this.notebook));
        
        if (!this.notebook) {
            this.notebook = {title: 'My Notebook', id: -1};
        } 

        navigator.geolocation.getCurrentPosition(
                (position) => {
                    //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    console.log(position.coords.latitude, position.coords.longitude);
                    this.notebook.latitude = position.coords.latitude;
                    this.notebook.longitude = position.coords.longitude;
                }
        );
    }

    saveNotebook() {
        console.log(JSON.stringify(this.notebook));
        this.dataService.saveNotebook(this.notebook);
        Vibration.vibrate(1000);//vibrate a second
        console.log("Notebook saved successfully");
        
        this.events.publish('notebooks:refresh', "");

        this.nav.pop();
    }

    cancel() {
        this.nav.pop();
    }
}