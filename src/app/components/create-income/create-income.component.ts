import { Account } from 'src/app/models/Account';
import { Income } from './../../models/Income';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { v4 as uuid } from 'uuid';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

import currency from 'currency.js';

@Component({
  selector: 'app-create-income',
  templateUrl: './create-income.component.html',
  styleUrls: ['./create-income.component.scss'],
})
export class CreateIncomeComponent {
  income: Income = {
    id: '',
    amount: '',
    date: '',
    account: '',
    category: { name: '' },
  };
  accounts: Account[] = [];
  categories: Category[] = [];

  constructor(private router: Router, private toastr: NotificationService) {}

  ngOnInit() {
    this.setCurrentDate();
    this.getAccounts();
    this.getCategories();
  }

  getAccounts() {
    // TODO: Puxar Accounts do Banco
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
  getCategories() {
    // TODO: Puxar IncomeCategories do Banco
    this.categories = [
      {
        id: uuid(),
        name: 'Salário',
      },
      {
        id: uuid(),
        name: 'Bônus',
      },
    ];
  }

  submit() {
    // Capturar dados da tela, montar objeto e fazer POST na API
    this.toastr.success('Receita salva com sucesso!', 'Receitas');
    this.router.navigate(['home']);
    console.log(this.income);
  }
  cancel() {
    this.router.navigate(['home']);
  }

  setCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    this.income.date = `${year}-${month}-${day}`;
  }

  createMask(): any {
    return {
      prefix: '',
      thousands: '.',
      decimal: ',',
      align: 'right',
      allowNegative: true,
      allowLeadingZeroes: false,
    };
  }

  formatAmount() {
    if (this.income.amount !== '') {
      const valorNumerico = currency(this.income.amount, {
        precision: 2,
        separator: '.',
        decimal: ',',
      });
      this.income.amount = valorNumerico.format({
        symbol: 'R$',
        decimal: ',',
      });
    }
  }

  onSelectChange(selected: any) {
    this.income.account = selected.account;
    console.log(this.income);
  }
}
