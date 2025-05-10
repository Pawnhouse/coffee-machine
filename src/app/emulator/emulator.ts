import {Emulator} from './emulator.interface';

export class EmulatorImpl implements Emulator {
  private cashInCallback: ((amount: number) => void) | null = null;
  private currentInput: string = '';
  private readonly cashInKeydownHandler: (event: KeyboardEvent) => void;

  private transactionCallback: ((result: boolean) => void) | null = null;
  private displayCallback: ((pinPadText: string) => void) | null = null;
  private readonly bankCardKeydownHandler: (event: KeyboardEvent) => void;

  private vendCallback: ((result: boolean) => void) | null = null;
  private readonly vendKeydownHandler: (event: KeyboardEvent) => void;

  constructor() {
    this.cashInKeydownHandler = this.handleCashInKeydown.bind(this);
    this.bankCardKeydownHandler = this.handleBankCardKeydown.bind(this);
    this.vendKeydownHandler = this.handleVendKeydown.bind(this);
  }

  private reset() {
    this.cashInCallback = null;
    this.currentInput = '';
    this.transactionCallback = null;
    this.displayCallback = null;
    this.vendCallback = null;
  }

  private handleCashInKeydown(event: KeyboardEvent): void {
    const key = event.key;
    if(!event.ctrlKey) {
      return;
    }
    event.preventDefault();

    if (/^\d$/.test(key)) {
      this.currentInput += key;
    } else if (key === 'Enter' && this.currentInput.length > 0) {
      const amount = parseInt(this.currentInput, 10);
      this.cashInCallback?.(amount);
      this.currentInput = '';
    }
  }


  StartCashin(cb: (amount: number) => void): void {
    this.reset();
    this.cashInCallback = cb;
    this.currentInput = '';
    window.addEventListener('keydown', this.cashInKeydownHandler);
  }

  StopCashin(cb: () => void): void {
    window.removeEventListener('keydown', this.cashInKeydownHandler);
    cb();
  }

  private cleanupTransaction(): void {
    this.transactionCallback = null;
    this.displayCallback = null;
    window.removeEventListener('keydown', this.bankCardKeydownHandler);
  }

  private handleBankCardKeydown(event: KeyboardEvent): void {
    const key = event.key;
    if(!event.ctrlKey) {
      return;
    }
    event.preventDefault();

    if (key === '1') {
      this.transactionCallback?.(true);
      this.displayCallback?.('Оплачено')
      this.cleanupTransaction();
    } else if (key === '0') {
      this.transactionCallback?.(false);
      this.displayCallback?.("Не удалось оплатить картой");
      this.cleanupTransaction();
    }
  }

  BankCardPurchase(
    amount: number,
    cb: (result: boolean) => void,
    display_cb: (pinPadText: string) => void
  ): void {
    this.reset();
    this.transactionCallback = cb;
    this.displayCallback = display_cb;
    this.displayCallback('Приложите карту');
    setTimeout(() => this.displayCallback?.('Обработка карты'), 500);
    setTimeout(() => this.displayCallback?.('Связь с банком'), 1000);
    window.addEventListener('keydown', this.bankCardKeydownHandler);
  }

  BankCardCancel(): void {
    this.transactionCallback?.(false);
    this.displayCallback?.("Отмена оплаты картой");
    this.cleanupTransaction();
  }

  private handleVendKeydown(event: KeyboardEvent): void {
    const key = event.key;
    if(!event.ctrlKey) {
      return;
    }
    event.preventDefault();

    if (key === '1') {
      this.vendCallback?.(true);
      window.removeEventListener('keydown', this.vendKeydownHandler);
    } else if (key === '0') {
      this.vendCallback?.(false);
      window.removeEventListener('keydown', this.vendKeydownHandler);
    }
  }

  Vend(product_idx: number, cb: (result: boolean) => void): void {
    this.reset();
    this.vendCallback = cb;
    window.addEventListener('keydown', this.vendKeydownHandler);
  }
}
