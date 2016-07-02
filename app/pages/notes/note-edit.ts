import {Component} from "@angular/core";
import {Page} from "ionic-angular";
import {NavParams, NavController} from "ionic-angular";
import {LocalStorageService} from "../../services/local-storage-service";
import {Events} from "ionic-angular";

import {Camera} from "ionic-native";

@Component({
    templateUrl: "build/pages/notes/note-edit.html",
    providers: [LocalStorageService]
})

export class NoteEditPage {
    note: any;
    notebook: any; 

    constructor(private dataService: LocalStorageService, private nav:NavController, 
                private  navParams:NavParams,
                private events:Events) {
        this.notebook = navParams.get("notebook");

        this.note = navParams.get("note");

        if (!this.note) {
            this.note = {title: '', 
                         description: '', 
                         notebookId: this.notebook.id, 
                         id: -1,
                         base64Image: ''
                    };
        }

        navigator.geolocation.getCurrentPosition(
                (position) => {
                    //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    console.log(position.coords.latitude, position.coords.longitude);
                    this.note.latitude = position.coords.latitude;
                    this.note.longitude = position.coords.longitude;
                }
        );
    }

    takePicture(){
            Camera.getPicture({
                destinationType: Camera.DestinationType.DATA_URL,
                targetWidth: 1000,
                targetHeight: 1000
            }).then((imageData) => {
                // imageData is a base64 encoded string
                this.note.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
                console.log(err);
            });
    }

    saveNote(event) {
        this.dataService.saveNote(this.note);
        
        this.nav.pop();
    }

    cancel(event) {
        this.nav.pop();
    }
}