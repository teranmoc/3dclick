import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Orders page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {
  private type;
  private listOrders;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.type = this.navParams.get('type');
	if(this.type == "current_orders") {
		this.listOrders = [
			{order_ref: '123456', date: '15/03/2017', total: 125, quantity: 3, status: 'En cours de préparation'}
		];
	}
	else if(this.type == "old_orders") {
		this.listOrders = [
			{order_ref: '635942', date: '18/12/2016', total: 15, quantity: 1, status: 'Expédié'}
		];
	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
