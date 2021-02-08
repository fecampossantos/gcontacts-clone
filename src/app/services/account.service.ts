import { Injectable } from '@angular/core';
import { Account } from '../models/account.model'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accounts: Account[] = [
    {
      id: '1',
      name: 'Others',
      email: 'ac1@g.com'
    },
    {
      id: '2',
      name: 'Family',
      email: 'ac2@g.com'
    },
  ]

  constructor() { }

  getAll() {
    return [...this.accounts]
  }
}
