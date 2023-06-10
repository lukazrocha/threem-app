import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  account: Account = {
    name: '',
  };

  constructor(
    private router: Router,
    private notification: NotificationService
  ) {}

  submit() {
    this.notification.success(
      'Contas',
      `Conta ${this.account.name} cadastrada com sucesso`
    );
    this.router.navigate(['home']);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
