import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { CreateIncomeComponent } from './components/create-income/create-income.component';

const routes: Routes = [
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'createIncome', component: CreateIncomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
