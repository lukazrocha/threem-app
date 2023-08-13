import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  receitas: number = 10000; // Valor de exemplo para as receitas
  despesas: number = 6000; // Valor de exemplo para as despesas
  saldoTotal: number = this.receitas - this.despesas;

  constructor() {
    // Pode adicionar lógica para buscar os valores reais das receitas e despesas aqui
  }
}
