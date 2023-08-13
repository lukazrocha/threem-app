import { environment } from 'src/environments/enviroment';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { v4 as uuid } from 'uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getIncomeCategories() {
    return this.http.get<Category[]>(`${environment.API}/categories/incomes`);
  }

  getExpenseCategories() {
    return this.http.get<Category[]>(`${environment.API}/categories/expenses`);
  }
}
