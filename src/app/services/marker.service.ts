import { Injectable } from '@angular/core';
import { Marker } from '../models/marker.model';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private markers: Marker[] = [
    {
      id: '1',
      name: 'Family',
      color: 'orange',
    },
    {
      id: '2',
      name: 'Friends',
      color: 'red',
    },
    {
      id: '3',
      name: 'Work',
      color: 'blue',
    },
  ]

  constructor() { }


  getAll(){
    return [...this.markers];
  }
}
