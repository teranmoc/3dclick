import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CustomPage } from '../custom/custom';
import { CartService } from '../../providers/cart-service';
import { PanierPage } from '../panier/panier';
import { ProfilPage } from '../profil/profil';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  private category;
  private product;	// objet du produit
  private title;
  private filename;
  private price;
  private label;
  private info;
  private text_buy_no_custom;
  private color;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private cart: CartService) {
  	this.category = this.navParams.get('category');
	this.product = this.navParams.get('product');
	this.title = this.navParams.get('product').title;
	this.filename = this.navParams.get('product').filename;
	this.price = this.navParams.get('product').price;
	this.label = this.navParams.get('product').label;
	this.color = this.navParams.get('product').color;
	if(this.label == 'custom_label') {
		this.info = "Cet objet est personnalisable !";
		this.text_buy_no_custom = "Acheter sans personnaliser";
	}
	else if(this.label == 'promo_label') {
		this.info = "Cet article est en promo !";
		this.text_buy_no_custom = "Acheter";
	}
	else {
		this.text_buy_no_custom = "Acheter";
	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  buyProduct(custom: any) {
  	if(this.label == "custom_label") {
		if(custom) {		// l'utilisateur souhaite personnaliser le produit
			this.navCtrl.push(CustomPage, {
				product: this.product
			})
		}
		else {			// il ne souhaite pas le personnaliser, on ajoute le produit au panier directement
			this.cart.addProduct(this.product, false);
			let toast = this.toastCtrl.create({
				message: 'Le produit a été ajouté au panier sans personnalisation',
				duration: 3000,
				position: 'top'
			});
			toast.onDidDismiss(() => { });
			toast.present();
		}
	}
	else {
		this.cart.addProduct(this.product, false);
		let toast = this.toastCtrl.create({
			message: 'Le produit a été ajouté au panier',
			duration: 3000,
			position: 'top'
		});
		toast.onDidDismiss(() => { });
		toast.present();
	}
  }

  // Gestion des boutons de la barre
  goPage(page: any) {
    if(page == "panier") {
      this.navCtrl.push(PanierPage, {
        
      })
    }
    else if(page == "profil") {
      this.navCtrl.push(ProfilPage, {
        
      })
    }
  }

}
