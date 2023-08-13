import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './components/accounts/create-account/create-account.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CreateIncomeComponent } from './components/incomes/create-income/create-income.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CreateExpenseComponent } from './components/expenses/create-expense/create-expense.component';
import { ListAccountComponent } from './components/accounts/list-account/list-account.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UpdateAccountComponent } from './components/accounts/update-account/update-account.component';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';
import { ListIncomeComponent } from './components/incomes/list-income/list-income.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { ListCategoryComponent } from './components/categories/list-category/list-category.component';
import { UpdateCategoryComponent } from './components/categories/update-category/update-category.component';
import { UpdateIncomeComponent } from './components/incomes/update-income/update-income.component';
import { UpdateExpenseComponent } from './components/expenses/update-expense/update-expense.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    NavComponent,
    CreateIncomeComponent,
    CreateExpenseComponent,
    ListAccountComponent,
    UpdateAccountComponent,
    ListExpenseComponent,
    ListIncomeComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    UpdateIncomeComponent,
    UpdateExpenseComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      preventDuplicates: true,
    }),
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaskModule.forRoot(maskConfig),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
