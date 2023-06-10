import { Injectable } from '@angular/core';
import { Account } from '../models/Account';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts: Account[] = [];

  constructor() {
    //TODO: Puxar Accounts do Banco
    this.accounts = [
      {
        id: uuid(),
        name: 'Wallet',
      },
      {
        id: uuid(),
        name: 'Bradesco',
      },
    ];
  }

  getAccounts() {
    return this.accounts;
  }
}
