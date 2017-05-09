import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { PanierPage } from '../panier/panier';
import { ProfilPage } from '../profil/profil';
/*
  Generated class for the ProductsArt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products-art',
  templateUrl: 'products-art.html'
})
export class ProductsArtPage {
  productPage = ProductPage;
  private products;
    private category;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.category = this.navParams.get('category');
      if (this.category == "art") {
          this.category = "Art";

      	  // customized => flag permettant d'indiquer si l'article a été personnalisé par l'utilisateur ou non
          this.products = [
              {filename: 'guerrier', title: 'Guerrier mécanique', price: 48, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Art'},
              {filename: 'buste', title: 'Buste heureux', price: 8, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Art'},
              {filename: 'einstein', title: 'Einstein heureux', price: 65, label: 'promo_label', info: 'Promo !!', customized: false, category: 'Art'},
              {filename: 'savon', title: 'Savon en forme de dé', price: 13, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Art'},
              {filename: 'licorne', title: 'La Licorne Rose', price: 54, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Art'},
          ];
      }
      else if (this.category == "deco") {
      	  this.category = "Décoration";

      	  // customized => flag permettant d'indiquer si l'article a été personnalisé par l'utilisateur ou non
          this.products = [
              {filename: 'bonzai', title: 'Pot à bonzai japonais', price: 15, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Déco'},
              {filename: 'lampe', title: 'Lampe murale', price: 90, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Déco'},
              {filename: 'oiseau', title: 'Mangeoir aspect papier', price: 18, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Déco'},
              {filename: 'photophore', title: 'Photophore', price: 10, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Déco'},
              {filename: 'zip', title: 'Zip - La Belle et la Bete', price: 48, label: '', info: '', customized: false, category: 'Déco'},
          ];
      }
      else if (this.category == "gadget") {
      	  this.category = "Gadget";

      	  // customized => flag permettant d'indiquer si l'article a été personnalisé par l'utilisateur ou non
          this.products = [
              {filename: 'golf', title: 'Support balle de golf', price: 13, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Gadget'},
              {filename: 'drone', title: 'Drone volant', price: 290, label: '', info: '', customized: false, category: 'Gadget'},
              {filename: 'droide', title: 'Porte clé Droide', price: 10, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Gadget'},
              {filename: 'cartouche-support', title: 'Support de cartouche GameBoy', price: 25, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Gadget'},
              {filename: 'support', title: 'Support smartphone', price: 22, label: 'custom_label', info: 'Personnalisable', customized: false, category: 'Gadget'},
          ];
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsArtPage');
  }

  // affichage du produit
  viewProduct(product: any) {
    	this.navCtrl.push(ProductPage, {
  		category: product.category,
  		product: product
  	})
  }

  // Gestion de la barre
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
