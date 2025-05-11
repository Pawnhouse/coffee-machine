import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-payment-selection',
  imports: [
    Button
  ],
  templateUrl: './payment-selection.component.html',
  styleUrl: './payment-selection.component.css'
})
export class PaymentSelectionComponent {
  constructor(
    private readonly router: Router,
    protected readonly location: Location,
  ) {
  }

  selectPayment(method: string): void {
    if (method === 'cash') {
      this.router.navigate(['/cash-payment']);
    } else if (method === 'card') {
      this.router.navigate(['/card-payment']);
    }
  }
}
