import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, Events } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { OrdersPage } from '../orders/orders';
import { ReturnProductPage } from '../return-product/return-product';
import { ProfilService } from '../../providers/profil-service';


/*
  Generated class for the Profil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {
  public path;
  public displayPhotoMenu:boolean;
  public lastName;
  public firstName;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, 
  					public toastCtrl: ToastController, private profil: ProfilService, public event: Events) {

  	// Récupération des données à partir du service
  	this.path = this.profil.getPath();
  	this.lastName = this.profil.getLastName();
  	this.firstName = this.profil.getFirstName();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
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
      this.profil.setPath(path);
      this.event.publish('profil:updatePhoto');
      this.displayPhotoMenu = true;
    });
  }
  itemSelected(type: any) {
  	if((type == "current_orders") || (type == "old_orders")) {
		this.navCtrl.push(OrdersPage, {
				type: type
			})
  	}
  	else if(type == "return_product") {
		this.navCtrl.push(ReturnProductPage, {
				type: type
			})
  	}
  }
  modifyPassword() {
	let alert = this.alertCtrl.create({
		title: 'Modification du mot de passe',
		message: "Votre mot de passe sera modifié si l'ancien et le nouveau mot de passe sont différents.",
	    inputs: [
	      {
	        name: 'oldPassword',
	        placeholder: 'Ancien mot de passe',
	        type: 'password'
	      },
	      {
	        name: 'newPassword',
	        placeholder: 'Nouveau mot de passe',
	        type: 'password'
	      }
	    ],
	    buttons: [
	      {
	        text: 'Annuler',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Valider',
	        handler: data => {
	          // toast de validation
	          if(data.oldPassword == data.newPassword) {
	          	let toast = this.toastCtrl.create({
					message: 'Votre mot de passe a été modifié',
					duration: 3000,
					position: 'top'
				});
				toast.onDidDismiss(() => { });
				toast.present();
	          }
	          else {
	          	return false;
	          }
	        }
	      }
	    ]
	});
	alert.present();
  }
  contactPreference() {
  	let alert = this.alertCtrl.create();		// une autre approche de la création d'un message box
  	alert.setTitle('Préférence de contact');
  	alert.setMessage('Je souhaite que 3DClick me contacte');
    alert.addInput({
      type: 'radio',
      label: 'Par téléphone',
      value: 'tel',
      checked: true
    });
     alert.addInput({
      type: 'radio',
      label: 'Par mail',
      value: 'mail',
      checked: false
    });

    alert.addButton('Annuler');
    alert.addButton({
      text: 'Modifier',
      handler: data => {

      }
    });
    alert.present();
  }
  confirmDelete() {
  	let alert = this.alertCtrl.create({
	    title: 'Suppression de votre compte',
	    message: 'Etes vous absolument sûr de vouloir supprimer votre compte ? Vous perdrez vos suivis de commandes, modes de paiement, ...',
	    buttons: [
	      {
	        text: 'Annuler',
	        role: 'cancel',
	        handler: () => {
	        }
	      },
	      {
	        text: 'Oui, je veux supprimer mon compte',
	        handler: () => {
	        	let toast = this.toastCtrl.create({
					message: 'Votre compte a bien été supprimé.',
					duration: 3000,
					position: 'top'
				});
				toast.onDidDismiss(() => { });
				toast.present();
	        }
	      }
	    ]
	  });
	  alert.present();
  }
  valideProfil() {
  	//this.firstName = document.querySelectorAll("#firstName>input")[0].value
  	//this.profil.setFirstName(this.firstName);
  	//this.profil.setLastName(this.LastName);

  	let toast = this.toastCtrl.create({
					message: 'Votre compte a bien été mis à jour.',
					duration: 3000,
					position: 'top'
				});
				toast.onDidDismiss(() => { });
				toast.present();
  }
}
