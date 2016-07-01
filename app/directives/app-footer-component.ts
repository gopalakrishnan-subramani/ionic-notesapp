/*
 Example simple directive based on components, no input
*/

import {Component, OnInit, OnDestroy} from "@angular/core";
import {Alert} from "ionic-angular";

@Component({
    template: "<button ion-item>About</button>",
    selector: 'app-footer'
})
export class AppFooterComponent {
  constructor( ) {
      
  }
 
    ngOnInit() {
        console.log("AppFooterComponent ngOnInit");
    }

    ngOnDestroy() {
        console.log("AppFooterComponent ngOnDestroy");
    }
}