import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { CreateIncomeComponent } from './components/create-income/create-income.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'createIncome', component: CreateIncomeComponent },
  { path: 'createExpense', component: CreateExpenseComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
