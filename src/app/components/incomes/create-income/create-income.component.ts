import { DateutilService } from './../../../services/dateutil.service';
import { Account } from 'src/app/models/Account';
import { Income } from '../../../models/Income';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

import currency from 'currency.js';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { IncomeService } from 'src/app/services/income.service';

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
    account: { name: '' },
    category: { name: '' },
  };
  accounts: Account[];
  categories: Category[];

  constructor(
    private router: Router,
    private toastr: NotificationService,
    private accountService: AccountService,
    private categoryService: CategoryService,
    private incomeService: IncomeService,
    private dateUtilService: DateutilService
  ) {}

  ngOnInit() {
    this.income.date = this.dateUtilService.getCurrentDate();
    this.getAccounts();
    this.getCategories();
  }

  getAccounts() {
    return this.accountService.getAccounts().subscribe((response) => {
      this.accounts = response;
    });
  }

  getCategories() {
    return this.categoryService.getIncomeCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  saveIncome() {
    try {
      const incomeToSave: Income = {
        amount: this.unformatAmount(this.income.amount),
        date: this.dateUtilService.convertDate(this.income.date),
        account: this.income.account,
        category: this.income.category,
        note: this.income.note,
      };

      this.incomeService.saveIncome(incomeToSave).subscribe();
      this.toastr.success('Receita salva com sucesso!', 'Receitas');
      this.router.navigate(['home']);
    } catch (error) {
      this.toastr.error(error.message, 'Receitas');
    }
  }

  submit() {
    this.saveIncome();
  }

  cancel() {
    this.router.navigate(['home']);
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

  unformatAmount(amount: string): string {
    if (amount !== '') {
      return amount.replace('R$', '').replace('.', '').replace(',', '.');
    }
    return '';
  }
}
