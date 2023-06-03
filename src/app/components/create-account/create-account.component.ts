import { Component } from '@angular/core';
import { Account } from 'src/app/Account';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  account: Account = {
    name: '',
  };

  submit() {
    console.log(this.account);
  }
}
