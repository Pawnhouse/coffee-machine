import {Injectable} from '@angular/core';
import {Drink} from './drink.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkStateService {
  private _drink: Drink | null = null;
  private _paidAmount = 0;
  private _isPreparing = false;
  private readonly _vendResult = new BehaviorSubject<boolean | null>(null);

  constructor() {
    const storedDrink = localStorage.getItem('drink');
    if (storedDrink) {
      this._drink = JSON.parse(storedDrink);
    }

    const storedPaidAmount = localStorage.getItem('paidAmount');
    if (storedPaidAmount) {
      this._paidAmount = JSON.parse(storedPaidAmount);
    }

    const storedPreparing = localStorage.getItem('isPreparing');
    if (storedPreparing) {
      this._isPreparing = JSON.parse(storedPreparing);
    }

    const storedVendResult = localStorage.getItem('vendResult');
    if (storedVendResult) {
      this._vendResult.next(JSON.parse(storedVendResult));
    }
  }

  get drink(): Drink | null {
    return this._drink;
  }

  set drink(value: Drink | null) {
    this._drink = value;
    if (this._drink) {
      localStorage.setItem('drink', JSON.stringify(this._drink));
    } else {
      localStorage.removeItem('drink');
    }
  }

  get paidAmount(): number {
    return this._paidAmount;
  }

  set paidAmount(value: number) {
    this._paidAmount = value;
    localStorage.setItem('paidAmount', JSON.stringify(this._paidAmount));
  }

  get isPreparing(): boolean {
    return this._isPreparing;
  }

  set isPreparing(value: boolean) {
    this._isPreparing = value;
    localStorage.setItem('isPreparing', JSON.stringify(this._isPreparing));
  }

  get vendResult(): BehaviorSubject<boolean | null> {
    return this._vendResult;
  }

  setVendResult(value: boolean | null) {
    this._vendResult.next(value);
    if (value !== null) {
      localStorage.setItem('vendResult', JSON.stringify(value));
    } else {
      localStorage.removeItem('vendResult');
    }
  }

  reset(): void {
    this._drink = null;
    this._paidAmount = 0;
    this._isPreparing = false;
    this._vendResult.next(null);
  }
}
