import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-selection',
  imports: [],
  templateUrl: './payment-selection.component.html',
  styleUrl: './payment-selection.component.css'
})
export class PaymentSelectionComponent {
  constructor(private router: Router) {
  }

  selectPayment(method: string): void {
    if (method === 'cash') {
      this.router.navigate(['/cash-payment']);
    } else if (method === 'card') {
      this.router.navigate(['/card-payment']);
    }
  }
}
