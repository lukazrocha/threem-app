import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/Expense';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import currency from 'currency.js';
import { Account } from 'src/app/models/Account';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.scss'],
})
export class CreateExpenseComponent {
  expense: Expense = {
    id: '',
    amount: '',
    date: '',
    account: '',
    category: undefined,
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
    this.getCategories();
  }

  getAccounts() {
    return this.accountService.getAccounts().subscribe((response) => {
      this.accounts = response;
    });
  }

  getCategories() {
    this.categoryService.getExpenseCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  submit() {
    // Capturar dados da tela, montar objeto e fazer POST na API
    this.toastr.success('Despesa salva com sucesso!', 'Despesas');
    this.router.navigate(['home']);
  }

  cancel() {
    this.router.navigate(['home']);
  }

  setCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    this.expense.date = `${year}-${month}-${day}`;
  }

  formatAmount() {
    if (this.expense.amount !== '') {
      const valorNumerico = currency(this.expense.amount, {
        precision: 2,
        separator: '.',
        decimal: ',',
      });
      this.expense.amount = valorNumerico.format({
        symbol: 'R$',
        decimal: ',',
      });
    }
  }

  onSelectChange(selected: any) {
    this.expense.account = selected.account;
    console.log(this.expense);
  }
}
