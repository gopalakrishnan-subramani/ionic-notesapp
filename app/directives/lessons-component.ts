import {Component} from '@angular/core';

@Component({
    selector: "lessons",
   
    template: `
        <h2>Lessons</h2>
        <button ion-item *ngFor="#item of items; #i = index">{{item}} {{i}}</button>
        `
})
export class LessonsComponent {
    items: Array<string>

    constructor() {
      this.items = [
        "Angular",
        "Ionic",
        "Hands-on"
      ]
    }

    ngOnInit() {
        console.log('[Component] navbar onInit');
    }
}
