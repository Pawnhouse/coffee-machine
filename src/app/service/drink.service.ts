import {Injectable} from '@angular/core';

export interface Drink {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private readonly drinks: Drink[] = [
    {id: 1, name: 'Эспрессо', price: 79, image: 'assets/img/7579ba38e33cdead35b6a12cb9503765a763403c.jpg'},
    {id: 2, name: 'Эспрессо 2x', price: 109, image: 'assets/img/7579ba38e33cdead35b6a12cb9503765a763403c.jpg'},
    {id: 3, name: 'Американо', price: 119, image: 'assets/img/d1a9ab7fe833309832ae3d6be0bc2d9e27fee553.jpg'},
    {id: 4, name: 'Латте', price: 129, image: 'assets/img/c8fc24361bdd38636e765f6231b2ba6022ad1579.jpg'},
    {id: 5, name: 'Капучино', price: 129, image: 'assets/img/e2e1da47edd75a2e260ef4962c372f149db527ec.png'},
    {id: 6, name: 'Макинато', price: 129, image: 'assets/img/c128b372e3de3e5947e109d7ff5c19bd22fed153.jpg'}
    ];

  getDrinks(): Drink[] {
    return this.drinks;
  }
}
