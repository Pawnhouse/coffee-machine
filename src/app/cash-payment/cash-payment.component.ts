import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cash-payment',
  imports: [
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './cash-payment.component.html',
  styleUrl: './cash-payment.component.css'
})
export class CashPaymentComponent {
  amountPaid: number = 0;
  drink: any;

  constructor(private router: Router) {
    const selectedDrink = localStorage.getItem('selectedDrink');
    if (selectedDrink) {
      this.drink = JSON.parse(selectedDrink);
    }
  }

  pay(): void {
    if (this.amountPaid >= this.drink.price) {
      alert('Оплата прошла успешно!');
      this.router.navigate(['/preparation']);
    } else {
      alert('Недостаточно средств');
    }
  }
}
