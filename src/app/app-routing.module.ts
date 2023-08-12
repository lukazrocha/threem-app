import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { CreateIncomeComponent } from './components/incomes/create-income/create-income.component';
import { CreateExpenseComponent } from './components/expenses/create-expense/create-expense.component';
import { ListAccountComponent } from './components/accounts/list-account/list-account.component';
import { UpdateAccountComponent } from './components/accounts/update-account/update-account.component';
import { UpdateIncomeComponent } from './components/incomes/update-income/update-income.component';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';
import { UpdateExpenseComponent } from './components/expenses/update-expense/update-expense.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { ListCategoryComponent } from './components/categories/list-category/list-category.component';
import { UpdateCategoryComponent } from './components/categories/update-category/update-category.component';
import { ListIncomeComponent } from './components/incomes/list-income/list-income.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accounts/create', component: CreateAccountComponent },
  { path: 'accounts', component: ListAccountComponent },
  { path: 'accounts/update/:id', component: UpdateAccountComponent },
  { path: 'incomes/create', component: CreateIncomeComponent },
  { path: 'incomes', component: ListIncomeComponent },
  { path: 'incomes/update/:id', component: UpdateIncomeComponent },
  { path: 'expenses/create', component: CreateExpenseComponent },
  { path: 'expenses', component: ListExpenseComponent },
  { path: 'expenses/update/:id', component: UpdateExpenseComponent },
  { path: 'categories/create', component: CreateCategoryComponent },
  { path: 'categories', component: ListCategoryComponent },
  { path: 'categories/update/:id', component: UpdateCategoryComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
