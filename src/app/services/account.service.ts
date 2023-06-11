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
      {
        id: uuid(),
        name: 'C6 Bank',
      },
    ];
  }

  getAccounts() {
    return this.accounts;
  }

  getAccountById(id: string) {
    return this.accounts.find((account) => account.id === id);
  }

  updateAccount(account: Account) {
    let accountToUpdate: Account = this.getAccountById(account.id);

    this.accounts
      .filter((account) => accountToUpdate.id === account.id)
      .map((a) => (a.name = account.name));
  }
}
