import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-payment',
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './card-payment.component.html',
  styleUrl: './card-payment.component.css'
})
export class CardPaymentComponent implements OnInit {
  messages: string[] = [];
  drink: any;

  constructor(private router: Router) {
    const selectedDrink = localStorage.getItem('selectedDrink');
    if (selectedDrink) {
      this.drink = JSON.parse(selectedDrink);
    }
  }

  ngOnInit(): void {
    this.messages.push('Вставьте карту');
    setTimeout(() => this.messages.push('Введите PIN'), 2000);
    setTimeout(() => this.messages.push('Обработка платежа...'), 4000);
    setTimeout(() => {
      this.messages.push('Оплата прошла успешно!');
      this.router.navigate(['/preparation']);
    }, 6000);
  }
}
