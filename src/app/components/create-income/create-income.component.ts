import { Account } from 'src/app/models/Account';
import { Income } from './../../models/Income';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

import currency from 'currency.js';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';

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
  accounts: Account[];
  categories: Category[];

  constructor(
    private router: Router,
    private toastr: NotificationService,
    private accountService: AccountService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.setCurrentDate();
    this.getAccounts();
    this.categories = this.categoryService.getIncomeCategories();
  }

  getAccounts() {
    return this.accountService.getAccounts().subscribe((response) => {
      this.accounts = response;
    });
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
