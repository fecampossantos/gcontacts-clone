import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

import { ModalController } from '@ionic/angular';
//import { ModalPage } from '../modal/modal.page';
import { DetailsmodalComponent } from '../detailsmodal/detailsmodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public contacts: Contact[];

  constructor(
    private contactService: ContactService,
    public modalController: ModalController
    ) { }

  ngOnInit() {
    this.contacts = this.contactService.getAll();
  }

  async presentDetailsModal(contact: Contact) {
    const modal = await this.modalController.create({
      component: DetailsmodalComponent,
      cssClass: 'contacts-detail-modal',
      componentProps: {
        'contact': contact
      }
    });
    return await modal.present();
  }

}
