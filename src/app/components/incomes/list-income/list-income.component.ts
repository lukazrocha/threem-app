import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Income } from 'src/app/models/Income';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.scss'],
})
export class ListIncomeComponent {
  displayedColumns: string[] = [
    'id',
    'amount',
    'date',
    'category',
    'note',
    'actions',
  ];
  dataSource: MatTableDataSource<Income>;
  incomes: Income[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private incomeService: IncomeService) {
    this.getIncomes();
    this.dataSource = new MatTableDataSource(this.incomes);
  }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.incomes);
    }, 1000);
  }

  getIncomes() {
    return this.incomeService.getIncomes().subscribe((response) => {
      this.incomes = response;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
