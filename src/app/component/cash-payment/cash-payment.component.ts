import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Drink} from '../../service/drink.service';
import {Emulator} from '../../emulator/emulator.interface';
import {DrinkStateService} from '../../service/drink-state.service';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-cash-payment',
  imports: [
    FormsModule,
    NgIf,
    Button
  ],
  templateUrl: './cash-payment.component.html',
  styleUrl: './cash-payment.component.css'
})
export class CashPaymentComponent {
  paidAmount: number;
  drink: Drink | null;
  emulator: Emulator = (window as any).emulator;

  constructor(protected router: Router, protected readonly drinkStateService: DrinkStateService) {
    this.drink = this.drinkStateService.drink;
    this.paidAmount = this.drinkStateService.paidAmount;
    if (this.drink) {
      this.emulator.StartCashin(this.pay.bind(this));
    }
  }

  private pay(amount: number): void {
    this.drinkStateService.paidAmount = this.drinkStateService.paidAmount + amount;
    if (this.drinkStateService.paidAmount >= this.drink!.price) {
      this.emulator.StopCashin(() => undefined);
      this.drinkStateService.isPreparing = true;
      this.drinkStateService.setVendResult(null);
      this.emulator.Vend(this.drink!.id, (result) => {
        this.drinkStateService.setVendResult(result);
      })
      this.router.navigate(['/preparation']);
    }
  }
}
