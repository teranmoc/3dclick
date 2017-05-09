import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Valide page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-valide',
  templateUrl: 'valide.html'
})
export class ValidePage {
  private price;
  private delivery_type;
  private total_price;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.price = this.navParams.get('price');
  	if(this.navParams.get('delivery') == 'shop') {
		  this.delivery_type = 'Retrait en magasin';
		  this.total_price = this.price;
	  }
	  else {
		  this.delivery_type = 'Transporteur';
		  this.total_price = parseInt(this.price, 10) + 10;	// montant du transport, défini arbitrairement pour le moment
	  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidePage');
  }

}
