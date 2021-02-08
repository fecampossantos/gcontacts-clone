import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-detailsmodal',
  templateUrl: './detailsmodal.component.html',
  styleUrls: ['./detailsmodal.component.scss'],
})
export class DetailsmodalComponent implements OnInit {

  // Data passed in by componentProps
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {}

  editContact(){
    console.log('editing' + this.contact.name)
  }

}
