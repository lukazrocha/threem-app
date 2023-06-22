import { Injectable } from '@angular/core';
import { Account } from '../models/Account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.API}/accounts`);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.API}/accounts/all`);
  }

  getAccountById(id: string): Observable<Account> {
    return this.http.get<Account>(`${environment.API}/accounts/${id}`);
  }

  saveAccount(account: Account) {
    return this.http.post(`${environment.API}/accounts`, {
      name: account.name,
    });
  }

  updateAccount(id: string, account: Account) {
    return this.http.put(`${environment.API}/accounts/${id}`, {
      name: account.name,
    });
  }

  deleteAccount(id: string): Observable<any> {
    return this.http.delete(`${environment.API}/accounts/${id}`);
  }
}
