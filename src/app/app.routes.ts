import {Routes} from '@angular/router';
import {PaymentSelectionComponent} from './payment-selection/payment-selection.component';
import {CashPaymentComponent} from './cash-payment/cash-payment.component';
import {DrinkSelectionComponent} from './drink-selection/drink-selection.component';
import {CardPaymentComponent} from './card-payment/card-payment.component';
import {PreparationComponent} from './preparation/preparation.component';

export const routes: Routes = [
  {path: '', component: DrinkSelectionComponent},
  {path: 'payment', component: PaymentSelectionComponent},
  {path: 'cash-payment', component: CashPaymentComponent},
  {path: 'card-payment', component: CardPaymentComponent},
  {path: 'preparation', component: PreparationComponent},
];
