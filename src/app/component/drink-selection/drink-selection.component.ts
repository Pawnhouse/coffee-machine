import {Component, OnInit} from '@angular/core';
import {Drink, DrinkService} from '../../service/drink.service';
import {Router} from '@angular/router';
import {NgForOf} from '@angular/common';
import {DrinkStateService} from '../../service/drink-state.service';

@Component({
  selector: 'app-drink-selection',
  imports: [
    NgForOf
  ],
  templateUrl: './drink-selection.component.html',
  styleUrl: './drink-selection.component.css'
})
export class DrinkSelectionComponent implements OnInit {
  drinks: Drink[] = [];

  constructor(
    private readonly drinkService: DrinkService,
    private readonly router: Router,
    private readonly drinkStateService: DrinkStateService
  ) {
    this.drinkStateService.reset();
  }

  ngOnInit(): void {
    this.drinks = this.drinkService.getDrinks();
  }

  selectDrink(drink: Drink): void {
    this.drinkStateService.drink = drink;
    this.router.navigate(['/payment']);
  }
}
