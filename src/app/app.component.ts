import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PanierPage } from '../pages/panier/panier';
import { ProfilPage } from '../pages/profil/profil';
import { ConcoursPage } from '../pages/concours/concours'
import { ProfessionalPage } from '../pages/professional/professional';

import { ProfilService } from '../providers/profil-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  //
  // constructor(platform: Platform) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();
  //   });
  // }

  @ViewChild(Nav) nav: Nav;

  //rootPage: any = Page1;
  public path;
  public lastName;
  public firstName;
  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, private profil: ProfilService, public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Catalogue produits', icon: 'book', component: HomePage},
      { title: 'Jeux Concours', icon: 'game-controller-b', component: ConcoursPage},
      { title: 'Profil', icon: 'contact', component: ProfilPage },
      { title: 'Panier', icon: 'cart', component: PanierPage },
      { title: 'Professionnel', icon: 'cube', component: ProfessionalPage },
      { title: 'Contact', icon: 'mail', component: ContactPage },
      { title: 'A propos', icon: 'help', component: AboutPage }
      
    ];
    this.path = this.profil.getPath();
    this.lastName = this.profil.getLastName();
    this.firstName = this.profil.getFirstName();

    // Réagit à l'évènement lors de la modification de la photo pour MAJ de la photo dans le menu
    this.events.subscribe('profil:updatePhoto', () => {
      this.path = this.profil.getPath();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}


