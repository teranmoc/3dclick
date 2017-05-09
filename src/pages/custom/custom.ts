import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CartService } from '../../providers/cart-service';
/*
  Generated class for the Custom page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html'
})
export class CustomPage {
  private product;
	private color;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private cart: CartService) {
  	this.product = this.navParams.get('product');
	  this.color = "#000000";
  // .controller('MyCtrl', function($scope) {
	// 	  $scope.groups = [];
	// 	  for (var i=0; i<10; i++) {
	// 		  $scope.groups[i] = {
	// 			  name: i,
	// 			  items: []
	// 		  };
	// 		  for (var j=0; j<3; j++) {
	// 			  $scope.groups[i].items.push(i + '-' + j);
	// 		  }
	// 	  }
  //
	// 	  /*
	// 	   * if given group is the selected group, deselect it
	// 	   * else, select the given group
	// 	   */
	// 	  $scope.toggleGroup = function(group) {
	// 		  if ($scope.isGroupShown(group)) {
	// 			  $scope.shownGroup = null;
	// 		  } else {
	// 			  $scope.shownGroup = group;
	// 		  }
	// 	  };
	// 	  $scope.isGroupShown = function(group) {
	// 		  return $scope.shownGroup === group;
	// 	  };
  //
	//   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }
  
  buyProduct() {
  	this.cart.addProduct(this.product, true);
	let toast = this.toastCtrl.create({
		message: 'Le produit personnalisé a été ajouté au panier',
		duration: 3000,
		position: 'top'
	});
	toast.onDidDismiss(() => { });
	toast.present();

  }
	setColor(product : any){
		this.color = product;
		document.getElementById("couleur-choisie").style.backgroundColor = this.color;
		this.product.color = this.color;
		console.log (this.product);
	}

}
