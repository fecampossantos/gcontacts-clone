import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Contact } from '../app/models/contact.model'
import { Marker } from '../app/models/marker.model'
import { Account } from '../app/models/account.model'
import { ContactService } from './services/contact.service';
import { MarkerService } from './services/marker.service';
import { AccountService } from './services/account.service';
import { ModalController } from '@ionic/angular';
import { AddContactModalComponent } from '../app/pages/add-contact-modal/add-contact-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public accounts: Account[] = [];
  public markers: Marker[] = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private contactService: ContactService,
    private markerService: MarkerService,
    private accountService: AccountService,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.accounts = this.accountService.getAll();
    this.markers = this.markerService.getAll();
    console.log(this.markers)
  }

  async presentAddModal(){
    const modal = await this.modalController.create({
      component: AddContactModalComponent,
      backdropDismiss:false
    });

    modal.present();

    // Get returned data
    const { data } = await modal.onWillDismiss();
    console.log(data)

    //return await ;
  }
}
