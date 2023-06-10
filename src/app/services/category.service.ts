import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  incomeCategories: Category[];
  expenseCategories: Category[];

  constructor() {
    this.incomeCategories = [
      {
        id: uuid(),
        name: 'Salário',
      },
      {
        id: uuid(),
        name: 'Bônus',
      },
    ];
    this.expenseCategories = [
      {
        id: uuid(),
        name: 'Alimentação',
      },
      {
        id: uuid(),
        name: 'Educação',
      },
      {
        id: uuid(),
        name: 'Transporte',
      },
    ];
  }

  getIncomeCategories() {
    return this.incomeCategories;
  }

  getExpenseCategories() {
    return this.expenseCategories;
  }
}
