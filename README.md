# Projet **3DClick**

Justin COLLIEUX - Jérémie DECOME
Master 2 ILSEN - Alternant


Cette application e-Commerce est une application mobile hybride développé avec *Ionic 2*. 

## Installation
Pour installer l'application sur votre smartphone, il suffit d'utiliser l'APK fourni et de la transférer sur le smartphone.  
Il est possible de télécharger les sources à partir de ce dépôt Git privé et de les compiler via *Ionic 2* : 
* 1. Installer *Ionic 2* (tutoriel utilisé : https://ionicframework.com/docs/v2/intro/installation/ )
* 2. Cloner le dépôt : 

> $ git clone https://gitlab.lastiris.fr/jeremie/3dclick.git

(aucun mot de passe ne sera demandé, le dépôt étant en public)

* 3. Ajouter la plate forme **Android** : 
> $ ionic platform add android

* 4. Ajouter les plugins nécessaire (géolocalisation, Google Maps et Firebase)

> $ ionic plugin add cordova-plugin-crosswalk-webview --v16

> $ ionic plugin add cordova-plugin-googlemaps

> $ ionic plugin add https://github.com/ThisIsAreku/cordova-plugin-googlemaps.git --variable API_KEY_FOR_ANDROID="AIzaSyBa2CqaEQu0kBMpERM3qeMPQcZbTCEeWww"

* 5. Pour générer un APK Android, il faut que **Android Studio** et les outils nécessaires soient installés. 

> $ ionic run android --prod

Si, lors de la génération, Ionic indique que $ANDROID_HOME et $PATH ne contiennent pas les chemins vers Android Sdk, il faut les paramétrer :
> $ export ANDROID_HOME=$HOME/Android/Sdk

> $ export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

## Description de l'application
L'application dispose d'un side menu où est présent :
* Une page d'accueil où l'on peut accéder au catalogue (libellé **Catalogue produit**). C'est cette page qui est affichée à l'ouverture. Elle affiche les produits du moment ainsi que les catégories de produits (seuls les catégories *Art*, *Déco* et *Gadget* dispose de produits renseignés). 
* Une page de jeux concours (libellé **Jeux concours**).
* Une page où l'utilisateur peut consulter et modifier son profil (libellé **Profil**). Cette page permet l'accès au suivi de commandes (en cours et anciennes), retourner un produit, modifier son adresse email ou son mot de passe voir de supprimer son compte. La fonctionnalité native **Appareil photo** est utilisée si l'utilisateur veut changer sa photo de profil. Le profil utilise un service pour stocker le nom, le prénom et la photo de l'utilisateur. Lorsque ces informations sont modifiées, un évènement met à jour le menu. 
* Une page permettant de gérer le panier de l'utilisateur (libellé **Panier**). Le panier d'achat est géré par un service Ionic et est affiché si il y a au moins un produit dedans. Cette page utilise la fonctionnalité native **Géolocalisation** afin de déterminer si un magasin est proche ou non. 
* Une page permettant aux professionnels (surtout cette catégorie d'utilisateurs) de réaliser des prototypes (libellé **Professionnel**). Sur cette page, la fonctionnalité native **Appareil photo** est utilisée afin de prendre en photo une maquette ou un dessin. 
* Une page où il est possible de prendre contact avec 3DClick (libellé **Contact**). Après avoir remplir les champs et en cliquant sur le bouton Contactez nous, il est affiché un message de type Toast indiquant que le message a bien été transmis.
* Une page où les coordonnées de l'entreprise sont indiquées (libellé **A propos**).

Le menu reprend la photo ainsi que le nom et le prénom de l'utilisateur.

La barre d'en haut contient un bouton pour accéder au panier et un autre bouton pour accéder à son profil. 
Elle dispose également d'une barre de recherche qui n'est pas affichée sur smartphone. 

L'application mobile ne dispose de base de données permettant le stockage des informations. Celles çi sont directement codées dans le code source de la page *product-art*. C'est notamment le cas pour les produits. 
Un produit étant un objet où est renseigné : 
* Le nom du fichier de l'image à utiliser
* Le nom de l'objet
* Son prix
* Une valeur selon si l'objet est personnalisable ('custom_label'), en promo ('promo_label') ou classique. Il est utilisé pour savoir le produit est personnalisable ou non (les boutons *Personnaliser* et *Acheter sans personnaliser* seront alors présent sur la page du produit) et pour afficher la bonne classe CSS. 
* Le libellé associé ('Personnalisable' ou 'En promo') selon la valeur précédente
* Un flag permettant de savoir si l'objet a été personnalisé ou non et permet de l'indiquer dans le panier. Il est activé si l'utilisateur passe par la page **Personnaliser**. 
* La catégorie du produit (Art, Gadget, Déco, ...)

Note : la page pour afficher la liste des produits se nomme *products-art* car nous ne savions pas, lors de la création, comment passer des arguments en paramètres. Pour résumer, cette page sert à afficher tous les produits d'une catégorie. 

L'objet est passé aux différentes pages si besoin de cette manière :
Page d'accueil => Liste des produits de la catégorie => Produit

Une page produit affiche la photo, le nom de l'objet, le prix, un label (personnalisable ou promo, ...), une description. Selon si le produit peut être personnalisé ou non, les boutons **Personnaliser** et **Acheter sans personnaliser** seront proposé. Dans le cas contraire, seul le bouton **Acheter** est proposé. 



Fonctionnalités natives utilisées : 
* **Appareil photo** pour les pages *Professionnel* et *Profil* 
* **Géolocalisation** pour la page *Panier* pour indiquer si un magasin est proche de l'utilisateur. A savoir que seule la ville (avec le code postal) ainsi que le pays est affiché suivant les coordonnées GPS sont affichés. Ils nous a été impossible d'afficher une carte Google Maps (elle est présente mais ne veut pas s'afficher). 
* **Notifications** 

## Au sujet des notifications
Les notifications sont gérées par **Firebase**. 
Pour envoyer une notification à l'application, il faut se connecter à l'adresse suivante : https://console.firebase.google.com/project/dclick-37ff1/notification  (aucune mot de passe n'est demandé). 
Cliquez sur le bouton **Nouveau message** puis remplir les informations suivante :
* Texte du message
* Pour la valeur *Application*, choisir la valeur **com.company.troisdclick**
Puis cliquez sur le bouton **Envoyer**

La notification a été envoyée sur le smartphone ayant l'application. 

## Bugs et défaut constatés
Nous avions détectés quelques bugs dont nous n'avons pas eu le temps de les résoudre :
* Panier : Le défilement de la page ne fait pas afficher le bouton **Valider la commande** (il est présent si le panier contient un ou deux articles mais pas plus)
