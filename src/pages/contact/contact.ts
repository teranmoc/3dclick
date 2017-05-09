import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  submit(type: any) {
    var msg;
  	if(type == "part") {
  		msg = "Nous allons prendre contact avec vous très rapidement pour répondre à vos questions";
  	}
  	else if(type == "pro") {
  		msg = "Un interlocuteur va vous rappeler rapidement pour vos projets professionnels";
  	}
  	let toast = this.toastCtrl.create({
  		message: msg,
  		duration: 3000,
  		position: 'top'
  	});
  	toast.onDidDismiss(() => { });
  	toast.present();
  }
}
