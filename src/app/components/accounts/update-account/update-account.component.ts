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
  id: string;
  account: Account = {
    name: '',
  };

  constructor(
    private router: Router,
    private notification: NotificationService,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById() {
    return this.accountService.getAccountById(this.id).subscribe((response) => {
      this.account = response;
    });
  }

  update() {
    return this.accountService.updateAccount(this.id, this.account).subscribe();
  }

  submit() {
    try {
      this.update();
      this.notification.success(
        'Contas',
        `Conta ${this.account.name} atualizada com sucesso`
      );
      this.router.navigate(['home']);
    } catch (error) {
      this.notification.error(
        'Contas',
        `Erro ao atualizar a conta ${this.account.name}`
      );
    }
  }
}
