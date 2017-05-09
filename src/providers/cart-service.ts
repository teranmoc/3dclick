import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartService {

  private listProducts;
  private nbProducts;
  private totalPrice;
  constructor(public http: Http) {
  	this.http = http;
	this.listProducts = [];
	this.nbProducts = 0;
	this.totalPrice = 0;
  }
  addProduct(product: any, custom: any) {
  	product.customized = custom;
  	this.listProducts.push(product);
	this.nbProducts++;
	this.totalPrice += product.price;
  }
  deleteProduct(product: any) {
  	let i = this.listProducts.indexOf(product);
	if(i > -1) {
		this.listProducts.splice(i, 1);
		this.nbProducts--;
		this.totalPrice -= product.price;
	}
  	
  }
  getList() {
  	return this.listProducts;
  }
  getNbProducts() {
  	return this.nbProducts;
  }
  getTotalPrice() {
  	return this.totalPrice;
  }

}
