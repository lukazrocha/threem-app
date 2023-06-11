import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { CreateIncomeComponent } from './components/create-income/create-income.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';
import { ListAccountComponent } from './components/accounts/list-account/list-account.component';
import { UpdateAccountComponent } from './components/accounts/update-account/update-account.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accounts/create', component: CreateAccountComponent },
  { path: 'accounts', component: ListAccountComponent },
  { path: 'accounts/update/:id', component: UpdateAccountComponent },
  { path: 'incomes/create', component: CreateIncomeComponent },
  { path: 'expenses/create', component: CreateExpenseComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
