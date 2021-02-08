import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  //https://api.namefake.com/portuguese-brazil/female/

  private contacts: Contact[] = [
    {
      id: '1',
    name: 'John Doe',
    avatar: 'https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg',
    number: '+55 (xx) 123456780',
    email: 'johndoe@gmail.com',
    _from_account: 'ac1@g.com',
    markers: ['Friend']
    },
    {
      id: '2',
    name: 'Jane Doe',
    avatar: 'https://avongraphix.com/wp-content/uploads/edd/2015/11/woman-avatar-4.png',
    number: '+55 (xx) 016171718',
    email: '',
    _from_account: 'ac1@g.com',
    markers: ['Friend', 'Work']
    },
    {
      id: '3',
    name: 'Brad',
    avatar: 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png',
    number: '+55 (xx) 019384753',
    email: 'brad@gmail.com',
    _from_account: 'ac2@g.com',
    markers: ['Family']
    },
  ]

  constructor() { }

  getAll(){
    return [...this.contacts];
  }

}
