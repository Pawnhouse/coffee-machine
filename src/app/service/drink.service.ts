import {Injectable} from '@angular/core';

export interface Drink {
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private readonly drinks: Drink[] = [
    {name: 'Эспрессо', description: 'Крепкий кофе', price: 2.50},
    {name: 'Латте', description: 'Кофе с молоком', price: 3.00},
    {name: 'Капучино', description: 'Кофе с пенкой', price: 3.50},
  ];

  getDrinks(): Drink[] {
    return this.drinks;
  }
}
