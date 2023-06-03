import { Component } from '@angular/core';
import { Account } from 'src/app/Account';
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

  constructor(private notification: NotificationService) {}

  submit() {
    this.notification.success(this.account.name);
  }
}
