import { DateutilService } from './../../services/dateutil.service';
import { Component } from '@angular/core';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentDate: string;
  receitas: number = 0;
  despesas: number = 0;
  saldoTotal: number = this.receitas - this.despesas;

  constructor(
    private incomeService: IncomeService,
    private dateUtilService: DateutilService
  ) {
    this.currentDate = dateUtilService.getCurrentDate();
  }

  ngOnInit() {
    this.dateUtilService.getCurrentDate();
    setTimeout(() => {
      this.getIncomeTotal();
    }, 500);
  }

  getIncomeTotal() {
    this.incomeService
      .getIncomeMonthTotal(this.currentDate)
      .subscribe((response) => {
        this.receitas = response;
      });
  }
}
