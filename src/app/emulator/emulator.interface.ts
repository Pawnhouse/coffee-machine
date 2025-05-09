export interface Emulator {
  StartCashin: (cb: (amount: number) => void) => void;
  StopCashin: (cb: () => void) => void;
  BankCardPurchase: (amount: number, cb: (result: boolean) => void, display_cb: (pinPadText: string) => void) => void;
  BankCardCancel: () => void;
  Vend: (product_idx: number, cb: (result: boolean) => void) => void;
}


