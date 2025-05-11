import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule, Location} from '@angular/common';
import {Emulator} from '../../emulator/emulator.interface';
import {Drink} from '../../service/drink.service';
import {DrinkStateService} from '../../service/drink-state.service';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-card-payment',
  imports: [
    CommonModule,
    Button
  ],
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.css'
})
export class CardPaymentComponent {
  message = '';
  drink: Drink | null;
  shouldShowBackButton: boolean = false;
  emulator: Emulator = (window as any).emulator;

  constructor(
    protected readonly router: Router,
    protected readonly location: Location,
    private readonly drinkStateService: DrinkStateService
  ) {
    this.drink = this.drinkStateService.drink;
    if (this.drink) {
      this.emulator.BankCardPurchase(
        this.drink.price,
        this.finishOperation.bind(this),
        message => {
          this.message = message;
        }
      );
    }
  }

  finishOperation(result: any) {
    if (result) {
      this.drinkStateService.isPreparing = true;
      this.drinkStateService.setVendResult(null);
      this.emulator.Vend(0, (result) => {
        this.drinkStateService.setVendResult(result);
      });
      this.router.navigate(['/preparation']);
    } else {
      this.shouldShowBackButton = true;
    }
  }
}
