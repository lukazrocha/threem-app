import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';
import { Income } from '../models/Income';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  constructor(private http: HttpClient) {}

  getIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(`${environment.API}/entries/incomes`);
  }

  getAllIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(`${environment.API}/entries/incomes/all`);
  }

  getIncomeById(id: string): Observable<Income> {
    return this.http.get<Income>(`${environment.API}/entries/incomes/${id}`);
  }

  getIncomeMonthTotal(date: string): Observable<any> {
    return this.http.get(`${environment.API}/entries/incomes/total/${date}`);
  }

  saveIncome(income: Income) {
    return this.http.post(`${environment.API}/entries/incomes`, {
      amount: income.amount,
      date: income.date,
      category_id: income.category,
      account_id: income.account,
      note: income.note,
    });
  }

  updateIncome(id: string, income: Income) {
    return this.http.put(`${environment.API}/entries/incomes/${id}`, {
      amount: income.amount,
      date: income.date,
      category_id: income.category.id,
      account_id: income.account.id,
      note: income.note,
    });
  }

  deleteIncome(id: string): Observable<any> {
    return this.http.delete(`${environment.API}/entries/incomes/${id}`);
  }
}
