import {Component} from '@angular/core';
import {DrinkStateService} from '../../service/drink-state.service';
import {NgIf} from '@angular/common';
import {Button} from 'primeng/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-preparation',
  imports: [
    NgIf,
    Button
  ],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.css'
})
export class PreparationComponent {
  isPreparing: boolean;
  vendResult: boolean | null;

  constructor(
    drinkStateService: DrinkStateService,
    protected readonly router: Router,
  ) {
    this.isPreparing = drinkStateService.isPreparing;
    this.vendResult = drinkStateService.vendResult.value;
    drinkStateService.vendResult.subscribe((result: boolean | null) => {
      this.vendResult = result;
    });
  }

  getStatus() {
    if (!this.isPreparing) {
      return '';
    } else if (this.vendResult === null) {
      return 'Готовится...';
    } else if (this.vendResult) {
      return 'Напиток готов';
    } else {
      return 'Не удалось приготовить напиток';
    }
  }
}
