import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera } from 'ionic-native';

/*
  Generated class for the Professional page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {
	public path;
  public displayPhotoMenu: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  	this.path = "assets/img/default_camera.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessionalPage');
  }

  openCamera() {
  	let option = {
      sourceType:Camera.PictureSourceType.CAMERA,
      destinationType:Camera.DestinationType.NATIVE_URI,
      correctOrientation:true,
      saveToPhotoAlbum:true
    };
 
    Camera.getPicture(option).then((path) => {
      this.path = path;
      this.displayPhotoMenu = true;
    });
  }
  submit() {
  	let toast = this.toastCtrl.create({
		  message: 'Votre demande de devis a été soumis. Vous recevrez une notification lorsque le devis sera prêt',
		  duration: 5000,
		  position: 'top'
	 });
	 toast.onDidDismiss(() => { });
	 toast.present();
  }

}
