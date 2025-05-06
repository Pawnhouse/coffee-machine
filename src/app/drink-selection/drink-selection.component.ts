import {Component, OnInit} from '@angular/core';
import {Drink, DrinkService} from '../drink.service';
import {Router} from '@angular/router';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-drink-selection',
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './drink-selection.component.html',
  styleUrl: './drink-selection.component.css'
})
export class DrinkSelectionComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService, private router: Router) {
  }

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinks();
  }

  selectDrink(drink: Drink): void {
    localStorage.setItem('selectedDrink', JSON.stringify(drink));
    this.router.navigate(['/payment']);
  }
}
