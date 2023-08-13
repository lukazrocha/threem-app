import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/Expense';
import { AccountService } from 'src/app/services/account.service';
import { CategoryService } from 'src/app/services/category.service';
import { NotificationService } from 'src/app/services/notification.service';
import currency from 'currency.js';
import { Account } from 'src/app/models/Account';
import { Category } from 'src/app/models/Category';
import { DateutilService } from 'src/app/services/dateutil.service';
import { ExpenseService } from 'src/app/services/expense.service';

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
    private expenseService: ExpenseService,
    private dateUtilService: DateutilService
  ) {}

  ngOnInit() {
    this.expense.date = this.dateUtilService.getCurrentDate();
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
}
