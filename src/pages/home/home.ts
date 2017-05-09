import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import {ProductsArtPage} from '../products-art/products-art'
import { ProductPage } from '../product/product';
import { PanierPage } from '../panier/panier';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productArtsPage = ProductsArtPage;
  private productsPage;
  private dayProducts;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productsPage = [
      {category: 'art'},
      {category: 'deco'},
      {category: 'gadget'},
      {category: 'pratique'},
      {category: 'cuisine'},
      {category: 'jeu'}
    ];
    
    this.dayProducts= [
              {filename: 'faucon-millenium', title: 'Faucon Millenium - Star Wars', price: 85, label: 'promo_label', info: 'Promo !!', customized: false, category: 'Art'},
              {filename: 'warrior', title: 'Guerrier', price: 26, label: 'promo_label', info: 'Promo !!', customized: false, category: 'Gadget'},
          ];
  }
  viewPage(productpage: any) {
    this.navCtrl.push(ProductsArtPage, {
      category: productpage.category
    })
  }
  viewProduct(product: any) {
    this.navCtrl.push(ProductPage, {
      category: product.category,
      product: product
   })
  }
  resetSearch() {
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
