import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/account.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss'],
})
export class UpdateAccountComponent {
  account: Account = {
    id: '',
    name: '',
  };

  constructor(
    private router: Router,
    private notification: NotificationService,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.account.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById() {
    this.account = this.accountService.getAccountById(this.account.id); //subscribe
  }

  update(account: Account) {
    this.accountService.updateAccount(account);
  }

  submit() {
    this.update(this.account);
    this.notification.success(
      'Contas',
      `Conta ${this.account.name} atualizada com sucesso`
    );
    this.router.navigate(['home']);
  }
}
