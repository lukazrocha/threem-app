import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss'],
})
export class ListAccountComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'acoes'];
  dataSource: MatTableDataSource<Account>;
  accounts: Account[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private accountService: AccountService) {
    this.getAccounts();
    this.dataSource = new MatTableDataSource(this.accounts);
  }

  ngOnInit() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.accounts);
    }, 1000);
  }

  getAccounts() {
    return this.accountService.getAccounts().subscribe((response) => {
      this.accounts = response;
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
