import {Routes} from '@angular/router';
import {PaymentSelectionComponent} from './component/payment-selection/payment-selection.component';
import {CashPaymentComponent} from './component/cash-payment/cash-payment.component';
import {DrinkSelectionComponent} from './component/drink-selection/drink-selection.component';
import {CardPaymentComponent} from './component/card-payment/card-payment.component';
import {PreparationComponent} from './component/preparation/preparation.component';

export const routes: Routes = [
  {path: '', component: DrinkSelectionComponent},
  {path: 'payment', component: PaymentSelectionComponent},
  {path: 'cash-payment', component: CashPaymentComponent},
  {path: 'card-payment', component: CardPaymentComponent},
  {path: 'preparation', component: PreparationComponent},
];
