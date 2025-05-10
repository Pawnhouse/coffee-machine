import {Component} from '@angular/core';
import {DrinkStateService} from '../../service/drink-state.service';

@Component({
  selector: 'app-preparation',
  imports: [],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.css'
})
export class PreparationComponent {
  isPreparing: boolean;
  vendResult: boolean | null;

  constructor(drinkStateService: DrinkStateService) {
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
      return 'Готовится';
    } else if (this.vendResult) {
      return 'Готово';
    } else {
      return 'Не удалось приготовить напиток';
    }
  }
}
