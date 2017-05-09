import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductPage } from '../product/product';

/*
  Generated class for the ReturnProduct page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-return-product',
  templateUrl: 'return-product.html'
})
export class ReturnProductPage {
	private order_ref;
	private listProducts;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.order_ref = 123456;
  	
  	// produits de la commande
  	this.listProducts = [
  			  {filename: 'photophore', title: 'Photophore', price: 10, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Déco'},
                {filename: 'einstein', title: 'Einstein heureux', price: 65, label: 'promo_label', info: 'Promo !!', customized: false, category: 'Art'},
                {filename: 'lampe', title: 'Lampe murale', price: 90, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Déco'},
                {filename: 'zip', title: 'Zip - La Belle et la Bete', price: 48, label: '', info: '', customized: false, category: 'Déco'},
                {filename: 'savon', title: 'Savon en forme de dé', price: 13, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Art'},
                {filename: 'cartouche-support', title: 'Support de cartouche GameBoy', price: 25, label: 'custom_label', info: 'Personnalisable', customized: true, category: 'Gadget'},
            ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnProductPage');
  }
  viewProduct(product: any) {
  	this.navCtrl.push(ProductPage, {
  		category: 'Art',
  		product: product
  	})
  }
  refreshList() {
  }

}
