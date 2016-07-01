import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';  

import {NotebooksPage} from './pages/notebooks/notebooks';

import {Alert} from 'ionic-angular';

import {AppFooterComponent} from './directives/app-footer-component';
import {LessonsComponent} from './directives/lessons-component';

import {CapatalizePipe} from './pipes/capitalize';
import {SummaryPipe} from './pipes/summary';

@Component({
  templateUrl: 'build/app.html',
  directives: [AppFooterComponent, LessonsComponent],
  pipes: [CapatalizePipe, SummaryPipe]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  title: string;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      {title: 'Notebooks', component: NotebooksPage},
      
    ];

    this.title = "NotesApp";
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
   

}

ionicBootstrap(MyApp);
