import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PanierPage } from "../pages/panier/panier";
import { ProfilPage } from "../pages/profil/profil";
import { ConcoursPage } from "../pages/concours/concours";
import { ProductsArtPage } from "../pages/products-art/products-art";
import { ProductPage } from "../pages/product/product";
import { CustomPage } from "../pages/custom/custom";
import { ValidePage } from '../pages/valide/valide';
import { OrdersPage } from '../pages/orders/orders';
import { ReturnProductPage } from '../pages/return-product/return-product';
import { ProfessionalPage } from '../pages/professional/professional';

// Services
import { CartService } from '../providers/cart-service';
import { ProfilService } from '../providers/profil-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PanierPage,
    ProfilPage,
    ConcoursPage,
    ProductsArtPage,
    ProductPage,
    CustomPage,
    ValidePage,
    OrdersPage,
    ReturnProductPage,
    ProfessionalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PanierPage,
    ProfilPage,
    ConcoursPage,
    ProductsArtPage,
    ProductPage,
    CustomPage,
    ValidePage,
    OrdersPage,
    ReturnProductPage,
    ProfessionalPage
  ],
  providers: [CartService, ProfilService, 
  		{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
