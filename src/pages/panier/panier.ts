import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
//import { Geolocation } from 'ionic-native';
import { ProductPage } from '../product/product';
import { ValidePage } from '../valide/valide';
import { CartService } from '../../providers/cart-service';

declare var google;


var cityValue;

@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html'
})
export class PanierPage { 
  private nbItems;
  private listProducts;
  private totalPrice;
  private long;
  private lat;
  public city;
  private delivery;

   @ViewChild('map') mapElement: ElementRef;
   public map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private cart: CartService) {
  	this.nbItems = this.cart.getNbProducts();
	   this.listProducts = this.cart.getList();
	   this.totalPrice = this.cart.getTotalPrice();
     this.long = -9;
     this.lat = -9;
     this.city = "";
     this.delivery = 'shop';
  }
  ionViewDidLoad(): void { 
    this.platform.ready().then(() => { 
      this.initializeMap(); 
    }); 
  }
  initializeMap() {
    this.platform.ready().then(() => {
        let locationOptions = {timeout: 10000, enableHighAccuracy: true};
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.long = position.coords.longitude;
                this.lat = position.coords.latitude;

                /*let options = {
                  center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                  zoom: 16,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                }
                this.map = new google.maps.Map(document.getElementById("map_canvas"), options);//*/
                
                // mise à jour de la ville
                this.getCityByGps(this.lat, this.long, function(value) {
                  getValue(value);
                })
                this.city = cityValue;
                console.log(this.city);

            },
            (error) => {
                alert("erreur google maps");
            }, locationOptions
        );
    });
  }
  // retourne la ville et le pays suivant les coordonnées GPS
  getCityByGps(lat: any, long: any, callback) {
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(this.lat, this.long);
    var request = {
      latLng: latlng
    };
    geocoder.geocode(request, function(data, status) { 
      if (status == google.maps.GeocoderStatus.OK) {
        if (data[0] != null) {
          // Forme : [code postal] [ville], [Pays]
          callback(data[0].address_components[6].short_name + " " + data[0].address_components[2].short_name + ", " + data[0].address_components[5].long_name);
        } 
        else {
          callback("");
        }
      }
    });
  }

  viewProduct(product: any) {
    	this.navCtrl.push(ProductPage, {
    		category: 'Art',
    		product: product
  	})
  }

  deleteProduct(product: any) {
  	this.cart.deleteProduct(product);
  	this.nbItems = this.cart.getNbProducts();
	  this.totalPrice = this.cart.getTotalPrice();
  }
  validateOrder() {
  	this.navCtrl.push(ValidePage, {
  		price: this.totalPrice,
  		delivery: this.delivery
  	})
  }
  setDeliveryMode(type: any) {
    this.delivery = type;
  }

}

// Permet de stocker la valeur issue du callback de geocoder dans une variable globale et la rend accessible pour la méthode initializeMaps()
function getValue(value: any) {
  console.log("get value : " + value);
  cityValue = value;
}
