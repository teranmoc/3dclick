import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfilService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfilService {
	private path;
	private lastName;
	private firstName;
  constructor(public http: Http) {
    this.path = "assets/img/man.png";
    this.firstName = "John";
    this.lastName = "Doe";
  }
  getPath() {
  	return this.path;
  }
  setPath(path: any) {
  	this.path = path;
  }
  getLastName() {
  	return this.lastName;
  }
  setLastName(lastName: any) {
  	this.lastName = lastName;
  }
  getFirstName() {
  	return this.firstName;
  }
  setFirstName(firstName: any) {
  	this.firstName = firstName;
  }

}
